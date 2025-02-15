import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import departmentServices from './department.services';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const Department = req.body;
  const newDepartment =
    await departmentServices.createAcademicDepartment(Department);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Department created successfully.',
    data: newDepartment,
  });
});

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const Departments = await departmentServices.getAllAcademicDepartments();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All academic Departments retrieved successfully.',
    data: Departments,
  });
});

const getAcademicDepartmentById = catchAsync(async (req, res) => {
  const Department = await departmentServices.getAcademicDepartmentById(
    req.params.id,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Department retrieved successfully.',
    data: Department,
  });
});

const updateAcademicDepartmentById = catchAsync(async (req, res) => {
  const updatedDepartment =
    await departmentServices.updateAcademicDepartmentById(
      req.params.id,
      req.body,
    );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Department updated successfully.',
    data: updatedDepartment,
  });
});

const deleteAcademicDepartmentById = catchAsync(async (req, res) => {
  const deletedDepartment =
    await departmentServices.deleteAcademicDepartmentById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Department deleted successfully.',
    data: deletedDepartment,
  });
});

const getAcademicDepartmentsByField = catchAsync(async (req, res) => {
  const query = req.query;
  const Departments =
    await departmentServices.getAcademicDepartmentsByField(query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic Departments retrieved successfully.',
    data: Departments,
  });
});

const updateAcademicDepartmentsByField = catchAsync(async (req, res) => {
  const query = req.query;
  const updatedDepartments =
    await departmentServices.updateAcademicDepartmentsByField(query, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic Departments updated successfully.',
    data: updatedDepartments,
  });
});

const deleteAcademicDepartmentsByField = catchAsync(async (req, res) => {
  const query = req.query;
  const deletedDepartments =
    await departmentServices.deleteAcademicDepartmentsByField(query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic Departments deleted successfully.',
    data: deletedDepartments,
  });
});

const DepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getAcademicDepartmentById,
  getAcademicDepartmentsByField,
  updateAcademicDepartmentById,
  updateAcademicDepartmentsByField,
  deleteAcademicDepartmentById,
  deleteAcademicDepartmentsByField,
};

export default DepartmentController;
