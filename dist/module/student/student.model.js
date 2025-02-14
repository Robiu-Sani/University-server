"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Define Sub-schemas
const NameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [2, 'First name must be at least 2 characters'],
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name must be at least 2 characters'],
    },
});
const GuardianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Guardian's name is required"],
    },
    occupation: {
        type: String,
        required: [true, "Guardian's occupation is required"],
    },
    contactNumber: {
        type: String,
        required: [true, "Guardian's contact number is required"],
        match: [/^01[3-9]\d{8}$/, 'Please enter a valid contact number'],
    },
});
// Main Schema
const studentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'Users' },
    id: {
        type: String,
        required: [true, 'Student ID is required'],
        unique: true,
        minlength: [1, 'ID must be at least 1 characters long'],
        maxlength: [20, 'ID cannot exceed 20 characters'],
    },
    name: NameSchema,
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: [true, 'Gender is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    avatar: {
        type: String,
        match: [/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/, 'Invalid avatar URL'],
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Date of Birth is required'],
    },
    contactNumber: {
        type: String,
        required: [true, 'Contact number is required'],
        match: [
            /^01[3-9]\d{8}$/,
            'Please enter a valid Bangladeshi contact number',
        ],
    },
    emergencyContactNumber: {
        type: String,
        required: [true, 'Emergency contact number is required'],
        match: [/^01[3-9]\d{8}$/, 'Please enter a valid emergency contact number'],
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'O+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O-'],
    },
    presentAddress: {
        type: String,
        required: [true, 'Present address is required'],
        minlength: [5, 'Address must be at least 5 characters long'],
    },
    permanentAddress: {
        // Fixed Typo
        type: String,
        required: [true, 'Permanent address is required'],
        minlength: [5, 'Address must be at least 5 characters long'],
    },
    guardian: GuardianSchema,
    profileImage: {
        type: String,
        match: [/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/, 'Invalid profile image URL'],
    },
    isActive: {
        type: String,
        enum: ['active', 'inActive'],
        default: 'active',
    },
});
//defining
studentSchema.methods.isStudentExits = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistStudent = Student.findOne({ id });
    return isExistStudent;
});
// Model Creation
const Student = mongoose_1.default.model('Student', studentSchema);
exports.default = Student;
