import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import facultyServices from './faculty.services';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const Faculty = req.body;
  const newFaculty = await facultyServices.createAcademicFaculty(Faculty);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty created successfully.',
    data: newFaculty,
  });
});

const getAllAcademicFacultys = catchAsync(async (req, res) => {
  const Facultys = await facultyServices.getAllAcademicFacultys();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All academic Facultys retrieved successfully.',
    data: Facultys,
  });
});

const getAcademicFacultyById = catchAsync(async (req, res) => {
  const Faculty = await facultyServices.getAcademicFacultyById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty retrieved successfully.',
    data: Faculty,
  });
});

const updateAcademicFacultyById = catchAsync(async (req, res) => {
  const updatedFaculty = await facultyServices.updateAcademicFacultyById(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty updated successfully.',
    data: updatedFaculty,
  });
});

const deleteAcademicFacultyById = catchAsync(async (req, res) => {
  const deletedFaculty = await facultyServices.deleteAcademicFacultyById(
    req.params.id,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty deleted successfully.',
    data: deletedFaculty,
  });
});

const getAcademicFacultysByField = catchAsync(async (req, res) => {
  const query = req.query;
  const Facultys = await facultyServices.getAcademicFacultysByField(query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic Facultys retrieved successfully.',
    data: Facultys,
  });
});

const updateAcademicFacultysByField = catchAsync(async (req, res) => {
  const query = req.query;
  const updatedFacultys = await facultyServices.updateAcademicFacultysByField(
    query,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic Facultys updated successfully.',
    data: updatedFacultys,
  });
});

const deleteAcademicFacultysByField = catchAsync(async (req, res) => {
  const query = req.query;
  const deletedFacultys =
    await facultyServices.deleteAcademicFacultysByField(query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic Facultys deleted successfully.',
    data: deletedFacultys,
  });
});

const facultyController = {
  createAcademicFaculty,
  getAllAcademicFacultys,
  getAcademicFacultyById,
  getAcademicFacultysByField,
  updateAcademicFacultyById,
  updateAcademicFacultysByField,
  deleteAcademicFacultyById,
  deleteAcademicFacultysByField,
};

export default facultyController;
