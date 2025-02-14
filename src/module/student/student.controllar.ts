import studentServices from './student.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
// import { studentSchemaZod } from './student.validation';

const createStudent = catchAsync(async (req, res) => {
  const payload = req.body;
  // const zodparsedData = studentSchemaZod.parse(payload);
  const student = await studentServices.createStudentDB(payload);
  // const student = await studentServices.createStudentDB(zodparsedData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student Add Successfull',
    data: student,
  });
});

const getAllStudents = catchAsync(async (req, res) => {
  const students = await studentServices.getAllStudentsDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: students,
  });
});

const getStudentById = catchAsync(async (req, res) => {
  const student = await studentServices.getStudentByIdDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: student,
  });
});

const getActiveStudents = catchAsync(async (req, res) => {
  const students = await studentServices.getActiveStudentsDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Active Student get Successfull',
    data: students,
  });
});

const getInactiveStudents = catchAsync(async (req, res) => {
  const students = await studentServices.getInactiveStudentsDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Inactive Student get Successfull',
    data: students,
  });
});

const getStudentByEmail = catchAsync(async (req, res) => {
  const student = await studentServices.getStudentByEmailDB(req.params.email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: student,
  });
});

const getStudentsByGender = catchAsync(async (req, res) => {
  const students = await studentServices.getStudentsByGenderDB(
    req.params.gender,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: students,
  });
});

const getStudentsByBloodGroup = catchAsync(async (req, res) => {
  const students = await studentServices.getStudentsByBloodGroupDB(
    req.params.bloodGroup,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: students,
  });
});

const updateStudentById = catchAsync(async (req, res) => {
  const student = await studentServices.updateStudentByIdDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: student,
  });
});

const patchStudentById = catchAsync(async (req, res) => {
  const student = await studentServices.patchStudentByIdDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: student,
  });
});

const updateManyStudents = catchAsync(async (req, res) => {
  const result = await studentServices.updateManyStudentsDB(
    req.body.filter,
    req.body.updateData,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: result,
  });
});

const deleteStudentById = catchAsync(async (req, res) => {
  const student = await studentServices.deleteStudentByIdDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: student,
  });
});

const deleteManyStudents = catchAsync(async (req, res) => {
  const result = await studentServices.deleteManyStudentsDB(req.body.filter);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student get Successfull',
    data: result,
  });
});

const studentController = {
  createStudent,
  getAllStudents,
  getStudentById,
  getActiveStudents,
  getInactiveStudents,
  getStudentByEmail,
  getStudentsByGender,
  getStudentsByBloodGroup,
  updateStudentById,
  patchStudentById,
  updateManyStudents,
  deleteStudentById,
  deleteManyStudents,
};
export default studentController;
