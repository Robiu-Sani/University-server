import mongoose from 'mongoose';
import { academicSamisterInterFace } from './academicSamister.interface';

const AcademicSemesterSchema = new mongoose.Schema<academicSamisterInterFace>({
  name: {
    type: String,
    enum: ['Autumn', 'Summar', 'Fall'],
    required: true,
  },
  code: {
    type: String,
    enum: ['01', '02', '03'],
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    required: true,
  },
  endMonth: {
    type: String,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    required: true,
  },
});

const AcademicSemester = mongoose.model<academicSamisterInterFace>(
  'AcademicSemester',
  AcademicSemesterSchema,
);

export default AcademicSemester;
