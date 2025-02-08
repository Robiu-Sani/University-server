import { z } from 'zod';

export const userValidationSchema = z.object({
  id: z.string().min(1, 'User ID is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  needsPasswordChange: z.boolean().default(false),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().default(false),
});
