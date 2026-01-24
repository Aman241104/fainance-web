'use server';

import { google } from 'googleapis';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Service is required"),
  message: z.string().optional(),
});

export type FormState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please submit valid form details.",
    };
  }

  const { name, phone, email, service, message } = validatedFields.data;

  try {
    // 1. Prepare Google Sheets Auth
    // Robustly handle the private key, replacing both literal '\n' characters and ensure standard formatting
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
      ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
      : undefined;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 2. Append to Sheet
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    // Explicitly verify credentials before attempting request
    if (!process.env.GOOGLE_CLIENT_EMAIL || !privateKey || !spreadsheetId) {
       console.error("Missing Google Credentials in .env.local");
       return { success: false, message: "Server misconfiguration: Missing credentials." };
    }
    
    if (spreadsheetId) {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'A:E', // Appends to the first empty row in columns A to E
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [new Date().toISOString(), name, phone, email, service, message || '']
          ],
        },
      });
    } else {
      console.warn("GOOGLE_SHEET_ID is missing. Skipping sheet submission.");
    }

    return { success: true, message: "Form submitted successfully!" };
    
  } catch (error) {
    console.error("Google Sheets Submission Error:", error);
    // Return success true mainly because we want to proceed to WhatsApp even if Sheet fails (optional fallback logic)
    // But ideally we want to know if it failed. For user experience, we can fail gracefully.
    return { 
      success: false, 
      message: "Failed to save details. Please try again or contact via WhatsApp." 
    };
  }
}
