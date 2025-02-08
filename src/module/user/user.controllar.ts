import { Request, Response } from 'express';
import { userValidationSchema } from './user.validation';
import UserServices from './user.services';

// Create a new User
const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const zodparsedData = userValidationSchema.parse(payload);
    // const User = await UserServices.createUserDB(payload);
    const User = await UserServices.createUserDB(zodparsedData);
    res.status(201).json(User);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Get all Users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const Users = await UserServices.getAllUsersDB();
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get a single User by ID
const getUserById = async (req: Request, res: Response) => {
  try {
    const User = await UserServices.getUserByIdDB(req.params.id);

    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get all active Users
const getUserByFildName = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const Users = await UserServices.getUserByFildDB(payload);
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update a User by ID (PUT)
const updateUserById = async (req: Request, res: Response) => {
  try {
    const User = await UserServices.updateUserByIdDB(req.params.id, req.body);

    res.status(200).json(User);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update a User by ID (PATCH)
const patchUserById = async (req: Request, res: Response) => {
  try {
    const User = await UserServices.patchUserByIdDB(req.params.id, req.body);

    res.status(200).json(User);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update many Users
const updateManyUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.updateManyUsersDB(
      req.body.filter,
      req.body.updateData,
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Delete a User by ID
const deleteUserById = async (req: Request, res: Response) => {
  try {
    const User = await UserServices.deleteUserByIdDB(req.params.id);

    res.status(200).json({ message: 'User deleted successfully', User });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Delete many Users
const deleteManyUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.deleteManyUsersDB(req.body.filter);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
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
