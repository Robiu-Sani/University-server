import mongoose from 'mongoose';
import { departmentInterface } from './department.interface';

const departmentSchema = new mongoose.Schema<departmentInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'faculty',
    },
  },
  { timestamps: true },
);

const AcademicDepartment = mongoose.model<departmentInterface>(
  'department',
  departmentSchema,
);
export default AcademicDepartment;
