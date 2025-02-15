import { facultyInterface } from './faculty.interface';
import AcademicFaculty from './faculty.model';

const createAcademicFaculty = async (semester: facultyInterface) => {
  return await AcademicFaculty.create(semester);
};

const getAllAcademicFacultys = async () => {
  return await AcademicFaculty.find();
};

const getAcademicFacultyById = async (id: string) => {
  return await AcademicFaculty.findById(id);
};

const updateAcademicFacultyById = async (
  id: string,
  updateData: Partial<facultyInterface>,
) => {
  return await AcademicFaculty.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deleteAcademicFacultyById = async (id: string) => {
  return await AcademicFaculty.findByIdAndDelete(id);
};

const getAcademicFacultysByField = async (query: object) => {
  return await AcademicFaculty.find(query);
};

const updateAcademicFacultysByField = async (
  query: object,
  updateData: Partial<facultyInterface>,
) => {
  return await AcademicFaculty.updateMany(query, updateData, { new: true });
};

const deleteAcademicFacultysByField = async (query: object) => {
  return await AcademicFaculty.deleteMany(query);
};

const facultyServices = {
  createAcademicFaculty,
  getAcademicFacultyById,
  getAcademicFacultysByField,
  getAllAcademicFacultys,
  updateAcademicFacultyById,
  updateAcademicFacultysByField,
  deleteAcademicFacultyById,
  deleteAcademicFacultysByField,
};

export default facultyServices;
