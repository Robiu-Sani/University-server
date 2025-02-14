import { NextFunction, Request, Response } from 'express';
// import { userValidationSchema } from './user.validation';
import UserServices from './user.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    // const zodparsedData = userValidationSchema.parse(payload);
    const User = await UserServices.createUserDB(payload);
    // const User = await UserServices.createUserDB(zodparsedData);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: User,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Users = await UserServices.getAllUsersDB();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: Users,
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const User = await UserServices.getUserByIdDB(req.params.id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: User,
    });
  } catch (error) {
    next(error);
  }
};

const getUserByFildName = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const payload = req.body;
    const Users = await UserServices.getUserByFildDB(payload);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: Users,
    });
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const User = await UserServices.updateUserByIdDB(req.params.id, req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: User,
    });
  } catch (error) {
    next(error);
  }
};

const patchUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const User = await UserServices.patchUserByIdDB(req.params.id, req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: User,
    });
  } catch (error) {
    next(error);
  }
};

const updateManyUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await UserServices.updateManyUsersDB(
      req.body.filter,
      req.body.updateData,
    );
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const User = await UserServices.deleteUserByIdDB(req.params.id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: User,
    });
  } catch (error) {
    next(error);
  }
};

const deleteManyUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await UserServices.deleteManyUsersDB(req.body.filter);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'user get Successfull',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UserController = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByFildName,
  updateUserById,
  patchUserById,
  updateManyUsers,
  deleteUserById,
  deleteManyUsers,
};
export default UserController;
