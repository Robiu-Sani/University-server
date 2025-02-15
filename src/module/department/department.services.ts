import { departmentInterface } from './department.interface';
import AcademicDepartment from './department.model';

const createAcademicDepartment = async (semester: departmentInterface) => {
  return await AcademicDepartment.create(semester);
};

const getAllAcademicDepartments = async () => {
  return await AcademicDepartment.find();
};

const getAcademicDepartmentById = async (id: string) => {
  return await AcademicDepartment.findById(id);
};

const updateAcademicDepartmentById = async (
  id: string,
  updateData: Partial<departmentInterface>,
) => {
  return await AcademicDepartment.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deleteAcademicDepartmentById = async (id: string) => {
  return await AcademicDepartment.findByIdAndDelete(id);
};

const getAcademicDepartmentsByField = async (query: object) => {
  return await AcademicDepartment.find(query);
};

const updateAcademicDepartmentsByField = async (
  query: object,
  updateData: Partial<departmentInterface>,
) => {
  return await AcademicDepartment.updateMany(query, updateData, { new: true });
};

const deleteAcademicDepartmentsByField = async (query: object) => {
  return await AcademicDepartment.deleteMany(query);
};

const departmentServices = {
  createAcademicDepartment,
  getAcademicDepartmentById,
  getAcademicDepartmentsByField,
  getAllAcademicDepartments,
  updateAcademicDepartmentById,
  updateAcademicDepartmentsByField,
  deleteAcademicDepartmentById,
  deleteAcademicDepartmentsByField,
};

export default departmentServices;
