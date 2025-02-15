"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("../user/user.model"));
const student_model_1 = __importDefault(require("./student.model"));
const createStudentDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        let roll = 1; // প্রথম রোল 1 হবে
        let id = '';
        // সর্বশেষ শিক্ষার্থীর তথ্য খোঁজা
        const lastStudent = yield student_model_1.default.findOne().sort({ createdAt: -1 });
        if (lastStudent) {
            roll = lastStudent.roll + 1; // পূর্ববর্তী শিক্ষার্থীর রোল +1
        }
        // আইডি তৈরি (ph000001 ফরম্যাট)
        id = 'ph' + String(roll).padStart(6, '0');
        // চেক করুন যে শিক্ষার্থী ইতোমধ্যে বিদ্যমান কিনা
        const isStudentExist = yield student_model_1.default.findOne({ id }).session(session);
        if (isStudentExist) {
            throw new Error('User already exists');
        }
        // নতুন ব্যবহারকারী তৈরি
        const userData = yield user_model_1.default.create([{ id }], { session });
        if (!userData || userData.length === 0) {
            throw new Error('Something went wrong, user is not created');
        }
        // নতুন শিক্ষার্থী তৈরি (User রেফারেন্স সহ)
        const payload = Object.assign(Object.assign({}, studentData), { id,
            roll, user: userData[0]._id });
        const newStudent = yield student_model_1.default.create([payload], { session });
        if (!newStudent || newStudent.length === 0) {
            throw new Error('Something went wrong, student is not created');
        }
        // যদি সবকিছু সফল হয়, তাহলে কমিট করুন
        yield session.commitTransaction();
        session.endSession();
        return newStudent[0];
    }
    catch (error) {
        yield session.abortTransaction(); // কোনো সমস্যা হলে ট্রানজেকশন বাতিল
        session.endSession();
        throw error;
    }
});
// Get all students
const getAllStudentsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.find().populate('user');
});
// Get a single student by ID
const getStudentByIdDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.findById(id);
});
// Get all active students
const getActiveStudentsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.find({ isActive: 'active' });
});
// Get all inactive students
const getInactiveStudentsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.find({ isActive: 'inActive' });
});
// Get a student by email
const getStudentByEmailDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.findOne({ email });
});
// Get students by gender
const getStudentsByGenderDB = (gender) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.find({ gender });
});
// Get students by blood group
const getStudentsByBloodGroupDB = (bloodGroup) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.find({ bloodGroup });
});
// Update a student by ID (PUT - replace entire document)
const updateStudentByIdDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.findByIdAndUpdate(id, updateData, { new: true });
});
// Update a student by ID (PATCH - partial update)
const patchStudentByIdDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.findByIdAndUpdate(id, { $set: updateData }, { new: true });
});
// Update many students by criteria
const updateManyStudentsDB = (filter, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.updateMany(filter, updateData);
});
// Delete a student by ID
const deleteStudentByIdDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.findByIdAndDelete(id);
});
// Delete many students by criteria
const deleteManyStudentsDB = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.deleteMany(filter);
});
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
exports.default = studentServices;
