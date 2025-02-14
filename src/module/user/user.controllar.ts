// import { userValidationSchema } from './user.validation';
import UserServices from './user.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
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
});

const getAllUsers = catchAsync(async (req, res) => {
  const Users = await UserServices.getAllUsersDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user get Successfull',
    data: Users,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const User = await UserServices.getUserByIdDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user get Successfull',
    data: User,
  });
});

const getUserByFildName = catchAsync(async (req, res) => {
  const payload = req.body;
  const Users = await UserServices.getUserByFildDB(payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user get Successfull',
    data: Users,
  });
});

const updateUserById = catchAsync(async (req, res) => {
  const User = await UserServices.updateUserByIdDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user get Successfull',
    data: User,
  });
});

const patchUserById = catchAsync(async (req, res) => {
  const User = await UserServices.patchUserByIdDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user get Successfull',
    data: User,
  });
});

const updateManyUsers = catchAsync(async (req, res) => {
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
});

const deleteUserById = catchAsync(async (req, res) => {
  const User = await UserServices.deleteUserByIdDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user get Successfull',
    data: User,
  });
});

const deleteManyUsers = catchAsync(async (req, res) => {
  const result = await UserServices.deleteManyUsersDB(req.body.filter);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user get Successfull',
    data: result,
  });
});

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
