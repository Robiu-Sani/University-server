import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import academicServices from './academicSamister.services';

const createAcademicSemester = catchAsync(async (req, res) => {
  const semester = req.body;
  const newSemester = await academicServices.createAcademicSemester(semester);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic semester created successfully.',
    data: newSemester,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const semesters = await academicServices.getAllAcademicSemesters();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All academic semesters retrieved successfully.',
    data: semesters,
  });
});

const getAcademicSemesterById = catchAsync(async (req, res) => {
  const semester = await academicServices.getAcademicSemesterById(
    req.params.id,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic semester retrieved successfully.',
    data: semester,
  });
});

const updateAcademicSemesterById = catchAsync(async (req, res) => {
  const updatedSemester = await academicServices.updateAcademicSemesterById(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic semester updated successfully.',
    data: updatedSemester,
  });
});

const deleteAcademicSemesterById = catchAsync(async (req, res) => {
  const deletedSemester = await academicServices.deleteAcademicSemesterById(
    req.params.id,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic semester deleted successfully.',
    data: deletedSemester,
  });
});

const getAcademicSemestersByField = catchAsync(async (req, res) => {
  const query = req.query;
  const semesters = await academicServices.getAcademicSemestersByField(query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic semesters retrieved successfully.',
    data: semesters,
  });
});

const updateAcademicSemestersByField = catchAsync(async (req, res) => {
  const query = req.query;
  const updatedSemesters =
    await academicServices.updateAcademicSemestersByField(query, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic semesters updated successfully.',
    data: updatedSemesters,
  });
});

const deleteAcademicSemestersByField = catchAsync(async (req, res) => {
  const query = req.query;
  const deletedSemesters =
    await academicServices.deleteAcademicSemestersByField(query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Filtered academic semesters deleted successfully.',
    data: deletedSemesters,
  });
});

const academicController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getAcademicSemesterById,
  getAcademicSemestersByField,
  updateAcademicSemesterById,
  updateAcademicSemestersByField,
  deleteAcademicSemesterById,
  deleteAcademicSemestersByField,
};

export default academicController;
