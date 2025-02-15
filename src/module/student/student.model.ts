import mongoose, { Schema } from 'mongoose';
import {
  instanceStudentMethod,
  intanceStudentModel,
  studentInterface,
} from './student.interface';

// Define Sub-schemas
const NameSchema = new Schema({
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

const GuardianSchema = new Schema({
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
const studentSchema = new Schema<
  studentInterface,
  intanceStudentModel,
  instanceStudentMethod
>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },
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
    roll: { type: Number, required: true },
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
      match: [
        /^01[3-9]\d{8}$/,
        'Please enter a valid emergency contact number',
      ],
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
      match: [
        /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/,
        'Invalid profile image URL',
      ],
    },
    samester: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'AcademicSemester',
    },
    isActive: {
      type: String,
      enum: ['active', 'inActive'],
      default: 'active',
    },
  },
  { timestamps: true },
);

//defining

studentSchema.methods.isStudentExits = async (id: string) => {
  const isExistStudent = Student.findOne({ id });

  return isExistStudent;
};

// Model Creation
const Student = mongoose.model<studentInterface, intanceStudentModel>(
  'Student',
  studentSchema,
);

export default Student;
