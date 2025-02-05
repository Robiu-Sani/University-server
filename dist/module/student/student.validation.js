"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchemaZod = void 0;
const zod_1 = require("zod");
exports.studentSchemaZod = zod_1.z.object({
    id: zod_1.z
        .string()
        .min(4, 'ID must be at least 4 characters')
        .max(10, 'ID cannot exceed 10 characters'),
    name: zod_1.z.object({
        firstName: zod_1.z.string().min(2, 'First name must be at least 2 characters'),
        middleName: zod_1.z.string().optional(),
        lastName: zod_1.z.string().min(2, 'Last name must be at least 2 characters'),
    }),
    gender: zod_1.z.enum(['male', 'female'], {
        errorMap: () => ({ message: 'Gender must be either male or female' }),
    }),
    email: zod_1.z.string().email('Please enter a valid email address'),
    avatar: zod_1.z
        .string()
        .regex(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/, 'Invalid avatar URL')
        .optional(),
    dateOfBirth: zod_1.z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date of Birth must be in YYYY-MM-DD format'),
    contactNumber: zod_1.z
        .string()
        .regex(/^01[3-9]\d{8}$/, 'Invalid Bangladeshi contact number'),
    emergencyContactNumber: zod_1.z
        .string()
        .regex(/^01[3-9]\d{8}$/, 'Invalid emergency contact number'),
    bloodGroup: zod_1.z
        .enum(['A+', 'O+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O-'])
        .optional(),
    presentAddress: zod_1.z
        .string()
        .min(5, 'Present address must be at least 5 characters long'),
    permanentAddress: zod_1.z
        .string()
        .min(5, 'Permanent address must be at least 5 characters long'),
    guardian: zod_1.z.object({
        name: zod_1.z.string().min(2, "Guardian's name must be at least 2 characters"),
        occupation: zod_1.z
            .string()
            .min(2, "Guardian's occupation must be at least 2 characters"),
        contactNumber: zod_1.z
            .string()
            .regex(/^01[3-9]\d{8}$/, 'Invalid guardian contact number'),
    }),
    profileImage: zod_1.z
        .string()
        .regex(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/, 'Invalid profile image URL')
        .optional(),
    isActive: zod_1.z.enum(['active', 'inActive']).default('active'),
});
