import { NextFunction, Request, Response } from 'express';
import studentServices from './student.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
// import { studentSchemaZod } from './student.validation';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await studentServices.getAllStudentsDB();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student get Successfull',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const student = await studentServices.getStudentByIdDB(req.params.id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student get Successfull',
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

const getActiveStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await studentServices.getActiveStudentsDB();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Active Student get Successfull',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

const getInactiveStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await studentServices.getInactiveStudentsDB();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Inactive Student get Successfull',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

const getStudentByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const student = await studentServices.getStudentByEmailDB(req.params.email);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student get Successfull',
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

const getStudentsByGender = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await studentServices.getStudentsByGenderDB(
      req.params.gender,
    );
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student get Successfull',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

const getStudentsByBloodGroup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await studentServices.getStudentsByBloodGroupDB(
      req.params.bloodGroup,
    );
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student get Successfull',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

const updateStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const patchStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const updateManyStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const deleteStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const student = await studentServices.deleteStudentByIdDB(req.params.id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student get Successfull',
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

const deleteManyStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.deleteManyStudentsDB(req.body.filter);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student get Successfull',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

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
