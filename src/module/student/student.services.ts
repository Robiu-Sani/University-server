import mongoose from 'mongoose';
import User from '../user/user.model';
import { studentInterface } from './student.interface';
import Student from './student.model';

const createStudentDB = async (studentData: studentInterface) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let roll: number = 1; // প্রথম রোল 1 হবে
    let id: string = '';

    // সর্বশেষ শিক্ষার্থীর তথ্য খোঁজা
    const lastStudent = await Student.findOne().sort({ createdAt: -1 });

    if (lastStudent) {
      roll = lastStudent.roll + 1; // পূর্ববর্তী শিক্ষার্থীর রোল +1
    }

    // আইডি তৈরি (ph000001 ফরম্যাট)
    id = 'ph' + String(roll).padStart(6, '0');

    // চেক করুন যে শিক্ষার্থী ইতোমধ্যে বিদ্যমান কিনা
    const isStudentExist = await Student.findOne({ id }).session(session);

    if (isStudentExist) {
      throw new Error('User already exists');
    }

    // নতুন ব্যবহারকারী তৈরি
    const userData = await User.create([{ id }], { session });

    if (!userData || userData.length === 0) {
      throw new Error('Something went wrong, user is not created');
    }

    // নতুন শিক্ষার্থী তৈরি (User রেফারেন্স সহ)
    const payload = {
      ...studentData,
      id,
      roll,
      user: userData[0]._id,
    };

    const newStudent = await Student.create([payload], { session });

    if (!newStudent || newStudent.length === 0) {
      throw new Error('Something went wrong, student is not created');
    }

    // যদি সবকিছু সফল হয়, তাহলে কমিট করুন
    await session.commitTransaction();
    session.endSession();

    return newStudent[0];
  } catch (error) {
    await session.abortTransaction(); // কোনো সমস্যা হলে ট্রানজেকশন বাতিল
    session.endSession();
    throw error;
  }
};

// Get all students
const getAllStudentsDB = async () => {
  return await Student.find().populate('user');
};

// Get a single student by ID
const getStudentByIdDB = async (id: string | number) => {
  return await Student.findById(id);
};

// Get all active students
const getActiveStudentsDB = async () => {
  return await Student.find({ isActive: 'active' });
};

// Get all inactive students
const getInactiveStudentsDB = async () => {
  return await Student.find({ isActive: 'inActive' });
};

// Get a student by email
const getStudentByEmailDB = async (email: string) => {
  return await Student.findOne({ email });
};

// Get students by gender
const getStudentsByGenderDB = async (gender: string) => {
  return await Student.find({ gender });
};

// Get students by blood group
const getStudentsByBloodGroupDB = async (bloodGroup: string) => {
  return await Student.find({ bloodGroup });
};

// Update a student by ID (PUT - replace entire document)
const updateStudentByIdDB = async (id: string | number, updateData: object) => {
  return await Student.findByIdAndUpdate(id, updateData, { new: true });
};

// Update a student by ID (PATCH - partial update)
const patchStudentByIdDB = async (id: string | number, updateData: object) => {
  return await Student.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true },
  );
};

// Update many students by criteria
const updateManyStudentsDB = async (filter: object, updateData: object) => {
  return await Student.updateMany(filter, updateData);
};

// Delete a student by ID
const deleteStudentByIdDB = async (id: string | number) => {
  return await Student.findByIdAndDelete(id);
};

// Delete many students by criteria
const deleteManyStudentsDB = async (filter: object) => {
  return await Student.deleteMany(filter);
};

const studentServices = {
  createStudentDB,
  getAllStudentsDB,
  getStudentByIdDB,
  getActiveStudentsDB,
  getInactiveStudentsDB,
  getStudentByEmailDB,
  getStudentsByGenderDB,
  getStudentsByBloodGroupDB,
  updateStudentByIdDB,
  patchStudentByIdDB,
  updateManyStudentsDB,
  deleteStudentByIdDB,
  deleteManyStudentsDB,
};

export default studentServices;
