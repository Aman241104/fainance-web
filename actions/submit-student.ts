'use server';

import { google } from 'googleapis';
import { z } from 'zod';

const StudentSchema = z.object({
  // Personal
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  city: z.string().min(1, "City is required"),
  
  // Study Plans
  targetCountry: z.string().min(1, "Target Country is required"),
  intake: z.string().min(1, "Preferred Intake is required"),
  colleges: z.string().optional(), // Top 5 preferences joined by comma or newline
  
  // Financial & Visa
  budget: z.string().min(1, "Budget is required"),
  visaHistory: z.string().optional(),
  services: z.array(z.string()).optional(),
});

export type StudentFormState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitStudentForm(prevState: StudentFormState, formData: FormData): Promise<StudentFormState> {
  // Extract multi-select services
  const services = formData.getAll('services') as string[];
  
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    city: formData.get('city'),
    targetCountry: formData.get('targetCountry'),
    intake: formData.get('intake'),
    colleges: formData.get('colleges'),
    budget: formData.get('budget'),
    visaHistory: formData.get('visaHistory'),
    services: services,
  };

  const validated = StudentSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      message: "Please fix the errors in the form.",
    };
  }

  const data = validated.data;

  try {
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
      ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
      : undefined;

    if (!process.env.GOOGLE_CLIENT_EMAIL || !privateKey || !process.env.GOOGLE_SHEET_ID) {
       console.error("Missing Credentials");
       return { success: false, message: "System configuration error." };
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Flatten services for sheet
    const servicesStr = data.services ? data.services.join(', ') : '';

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Student_Leads!A:K', // Targeting specific tab
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          data.name,
          data.email,
          data.phone,
          data.city,
          data.targetCountry,
          data.intake,
          data.colleges || '',
          data.budget,
          data.visaHistory || '',
          servicesStr
        ]],
      },
    });

    return { success: true, message: "Profile submitted successfully!" };
  } catch (error) {
    console.error("Student Portal Submission Error:", error);
    // Don't expose internal error, just proceed to WhatsApp
    return { success: false, message: "Couldn't save to database, redirecting to WhatsApp..." };
  }
}
