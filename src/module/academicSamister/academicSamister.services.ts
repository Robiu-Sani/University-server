import { academicSamisterInterFace } from './academicSamister.interface';
import AcademicSemester from './academicSamister.model';

const createAcademicSemester = async (semester: academicSamisterInterFace) => {
  const isExist = await AcademicSemester.findOne({
    name: semester.name,
    year: semester.year,
  });
  if (isExist) {
    throw new Error('There is already an existing semester');
  }
  return await AcademicSemester.create(semester);
};

const getAllAcademicSemesters = async () => {
  return await AcademicSemester.find();
};

const getAcademicSemesterById = async (id: string) => {
  return await AcademicSemester.findById(id);
};

const updateAcademicSemesterById = async (
  id: string,
  updateData: Partial<academicSamisterInterFace>,
) => {
  return await AcademicSemester.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deleteAcademicSemesterById = async (id: string) => {
  return await AcademicSemester.findByIdAndDelete(id);
};

const getAcademicSemestersByField = async (query: object) => {
  return await AcademicSemester.find(query);
};

const updateAcademicSemestersByField = async (
  query: object,
  updateData: Partial<academicSamisterInterFace>,
) => {
  return await AcademicSemester.updateMany(query, updateData, { new: true });
};

const deleteAcademicSemestersByField = async (query: object) => {
  return await AcademicSemester.deleteMany(query);
};

const academicServices = {
  createAcademicSemester,
  getAcademicSemesterById,
  getAcademicSemestersByField,
  getAllAcademicSemesters,
  updateAcademicSemesterById,
  updateAcademicSemestersByField,
  deleteAcademicSemesterById,
  deleteAcademicSemestersByField,
};

export default academicServices;
