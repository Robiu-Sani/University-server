"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'User ID is required'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters long'),
    needsPasswordChange: zod_1.z.boolean().default(false),
    role: zod_1.z.enum(['admin', 'student', 'faculty']).default('student'),
    status: zod_1.z.enum(['in-progress', 'blocked']).default('in-progress'),
    isDeleted: zod_1.z.boolean().default(false),
});
