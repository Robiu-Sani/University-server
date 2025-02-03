import { Request, Response } from 'express';
import studentServices from './student.services';

// Create a new student
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = await studentServices.createStudentDB(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Get all students
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentServices.getAllStudentsDB();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get a single student by ID
const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await studentServices.getStudentByIdDB(req.params.id);

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get all active students
const getActiveStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentServices.getActiveStudentsDB();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get all inactive students
const getInactiveStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentServices.getInactiveStudentsDB();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get a student by email
const getStudentByEmail = async (req: Request, res: Response) => {
  try {
    const student = await studentServices.getStudentByEmailDB(req.params.email);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get students by gender
const getStudentsByGender = async (req: Request, res: Response) => {
  try {
    const students = await studentServices.getStudentsByGenderDB(
      req.params.gender,
    );
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get students by blood group
const getStudentsByBloodGroup = async (req: Request, res: Response) => {
  try {
    const students = await studentServices.getStudentsByBloodGroupDB(
      req.params.bloodGroup,
    );
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update a student by ID (PUT)
const updateStudentById = async (req: Request, res: Response) => {
  try {
    const student = await studentServices.updateStudentByIdDB(
      req.params.id,
      req.body,
    );

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update a student by ID (PATCH)
const patchStudentById = async (req: Request, res: Response) => {
  try {
    const student = await studentServices.patchStudentByIdDB(
      req.params.id,
      req.body,
    );

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update many students
const updateManyStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.updateManyStudentsDB(
      req.body.filter,
      req.body.updateData,
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Delete a student by ID
const deleteStudentById = async (req: Request, res: Response) => {
  try {
    const student = await studentServices.deleteStudentByIdDB(req.params.id);

    res.status(200).json({ message: 'Student deleted successfully', student });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Delete many students
const deleteManyStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.deleteManyStudentsDB(req.body.filter);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
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
