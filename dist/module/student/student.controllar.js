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
const student_services_1 = __importDefault(require("./student.services"));
// Create a new student
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_services_1.default.createStudentDB(req.body);
        res.status(201).json(student);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
// Get all students
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_services_1.default.getAllStudentsDB();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Get a single student by ID
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_services_1.default.getStudentByIdDB(req.params.id);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Get all active students
const getActiveStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_services_1.default.getActiveStudentsDB();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Get all inactive students
const getInactiveStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_services_1.default.getInactiveStudentsDB();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Get a student by email
const getStudentByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_services_1.default.getStudentByEmailDB(req.params.email);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Get students by gender
const getStudentsByGender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_services_1.default.getStudentsByGenderDB(req.params.gender);
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Get students by blood group
const getStudentsByBloodGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_services_1.default.getStudentsByBloodGroupDB(req.params.bloodGroup);
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Update a student by ID (PUT)
const updateStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_services_1.default.updateStudentByIdDB(req.params.id, req.body);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
// Update a student by ID (PATCH)
const patchStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_services_1.default.patchStudentByIdDB(req.params.id, req.body);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
// Update many students
const updateManyStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_services_1.default.updateManyStudentsDB(req.body.filter, req.body.updateData);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
// Delete a student by ID
const deleteStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_services_1.default.deleteStudentByIdDB(req.params.id);
        res.status(200).json({ message: 'Student deleted successfully', student });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// Delete many students
const deleteManyStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_services_1.default.deleteManyStudentsDB(req.body.filter);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ error });
    }
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
exports.default = studentController;
