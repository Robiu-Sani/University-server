import mongoose from 'mongoose';
import { studentInterface } from './student.interface';

const studentSchema = new mongoose.Schema<studentInterface>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: false, // Optional
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'O+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O-'],
    required: false, // Optional
  },
  presentAddress: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
  },
  profileImage: {
    type: String,
    required: false, // Optional
  },
  isActive: {
    type: String,
    enum: ['active', 'inActive'],
    default: 'active',
  },
});

// Create the Mongoose model
const Student = mongoose.model<studentInterface>('Student', studentSchema);

// Export the model
export default Student;
