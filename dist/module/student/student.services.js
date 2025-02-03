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
const student_model_1 = __importDefault(require("./student.model"));
// Create a new student
const createStudentDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const student = new student_model_1.default(studentData);
    return yield student.save();
});
// Get all students
const getAllStudentsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.default.find();
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
