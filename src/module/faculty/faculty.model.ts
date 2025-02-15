import mongoose from 'mongoose';
import { facultyInterface } from './faculty.interface';

const facultySchema = new mongoose.Schema<facultyInterface>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const AcademicFaculty = mongoose.model<facultyInterface>(
  'faculty',
  facultySchema,
);

export default AcademicFaculty;
