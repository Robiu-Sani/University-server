import { studentInterface } from './student.interface';
import Student from './student.model';

// Create a new student
const createStudentDB = async (studentData: studentInterface) => {
  const student = new Student(studentData);
  return await student.save();
};

// Get all students
const getAllStudentsDB = async () => {
  return await Student.find();
};

// Get a single student by ID
const getStudentByIdDB = async (id: string | number) => {
  return await Student.findById(id);
};

// Get all active students
const getActiveStudentsDB = async () => {
  return await Student.find({ isActive: 'active' });
};

// Get all inactive students
const getInactiveStudentsDB = async () => {
  return await Student.find({ isActive: 'inActive' });
};

// Get a student by email
const getStudentByEmailDB = async (email: string) => {
  return await Student.findOne({ email });
};

// Get students by gender
const getStudentsByGenderDB = async (gender: string) => {
  return await Student.find({ gender });
};

// Get students by blood group
const getStudentsByBloodGroupDB = async (bloodGroup: string) => {
  return await Student.find({ bloodGroup });
};

// Update a student by ID (PUT - replace entire document)
const updateStudentByIdDB = async (id: string | number, updateData: object) => {
  return await Student.findByIdAndUpdate(id, updateData, { new: true });
};

// Update a student by ID (PATCH - partial update)
const patchStudentByIdDB = async (id: string | number, updateData: object) => {
  return await Student.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true },
  );
};

// Update many students by criteria
const updateManyStudentsDB = async (filter: object, updateData: object) => {
  return await Student.updateMany(filter, updateData);
};

// Delete a student by ID
const deleteStudentByIdDB = async (id: string | number) => {
  return await Student.findByIdAndDelete(id);
};

// Delete many students by criteria
const deleteManyStudentsDB = async (filter: object) => {
  return await Student.deleteMany(filter);
};

const studentServices = {
  createStudentDB,
  getAllStudentsDB,
  getStudentByIdDB,
  getActiveStudentsDB,
  getInactiveStudentsDB,
  getStudentByEmailDB,
  getStudentsByGenderDB,
  getStudentsByBloodGroupDB,
  updateStudentByIdDB,
  patchStudentByIdDB,
  updateManyStudentsDB,
  deleteStudentByIdDB,
  deleteManyStudentsDB,
};

export default studentServices;
