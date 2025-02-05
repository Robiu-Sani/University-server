import { z } from 'zod';

export const studentSchemaZod = z.object({
  id: z
    .string()
    .min(4, 'ID must be at least 4 characters')
    .max(10, 'ID cannot exceed 10 characters'),

  name: z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    middleName: z.string().optional(),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  }),

  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender must be either male or female' }),
  }),

  email: z.string().email('Please enter a valid email address'),

  avatar: z
    .string()
    .regex(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/, 'Invalid avatar URL')
    .optional(),

  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date of Birth must be in YYYY-MM-DD format'),

  contactNumber: z
    .string()
    .regex(/^01[3-9]\d{8}$/, 'Invalid Bangladeshi contact number'),

  emergencyContactNumber: z
    .string()
    .regex(/^01[3-9]\d{8}$/, 'Invalid emergency contact number'),

  bloodGroup: z
    .enum(['A+', 'O+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O-'])
    .optional(),

  presentAddress: z
    .string()
    .min(5, 'Present address must be at least 5 characters long'),

  permanentAddress: z
    .string()
    .min(5, 'Permanent address must be at least 5 characters long'),

  guardian: z.object({
    name: z.string().min(2, "Guardian's name must be at least 2 characters"),
    occupation: z
      .string()
      .min(2, "Guardian's occupation must be at least 2 characters"),
    contactNumber: z
      .string()
      .regex(/^01[3-9]\d{8}$/, 'Invalid guardian contact number'),
  }),

  profileImage: z
    .string()
    .regex(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/, 'Invalid profile image URL')
    .optional(),

  isActive: z.enum(['active', 'inActive']).default('active'),
});
