import { userInterface } from './user.interface';
import User from './user.model';

// Create a new User
const createUserDB = async (UserData: userInterface) => {
  const result = await User.create(UserData);
  return result;
};

// Get all Users
const getAllUsersDB = async () => {
  return await User.find();
};

// Get a single User by ID
const getUserByIdDB = async (id: string | number) => {
  return await User.findById(id);
};

// Get a User by role
const getUserByFildDB = async (data: object) => {
  return await User.findOne(data);
};

// Update a User by ID (PUT - replace entire document)
const updateUserByIdDB = async (id: string | number, updateData: object) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

// Update a User by ID (PATCH - partial update)
const patchUserByIdDB = async (id: string | number, updateData: object) => {
  return await User.findByIdAndUpdate(id, { $set: updateData }, { new: true });
};

// Update many Users by criteria
const updateManyUsersDB = async (filter: object, updateData: object) => {
  return await User.updateMany(filter, updateData);
};

// Delete a User by ID
const deleteUserByIdDB = async (id: string | number) => {
  return await User.findByIdAndDelete(id);
};

// Delete many Users by criteria
const deleteManyUsersDB = async (filter: object) => {
  return await User.deleteMany(filter);
};

const UserServices = {
  createUserDB,
  getAllUsersDB,
  getUserByIdDB,
  getUserByFildDB,
  updateUserByIdDB,
  patchUserByIdDB,
  updateManyUsersDB,
  deleteUserByIdDB,
  deleteManyUsersDB,
};

export default UserServices;
