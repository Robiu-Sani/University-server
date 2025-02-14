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
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
// import { studentSchemaZod } from './student.validation';
const createStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    // const zodparsedData = studentSchemaZod.parse(payload);
    const student = yield student_services_1.default.createStudentDB(payload);
    // const student = await studentServices.createStudentDB(zodparsedData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student Add Successfull',
        data: student,
    });
}));
const getAllStudents = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_services_1.default.getAllStudentsDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: students,
    });
}));
const getStudentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_services_1.default.getStudentByIdDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: student,
    });
}));
const getActiveStudents = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_services_1.default.getActiveStudentsDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Active Student get Successfull',
        data: students,
    });
}));
const getInactiveStudents = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_services_1.default.getInactiveStudentsDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Inactive Student get Successfull',
        data: students,
    });
}));
const getStudentByEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_services_1.default.getStudentByEmailDB(req.params.email);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: student,
    });
}));
const getStudentsByGender = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_services_1.default.getStudentsByGenderDB(req.params.gender);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: students,
    });
}));
const getStudentsByBloodGroup = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_services_1.default.getStudentsByBloodGroupDB(req.params.bloodGroup);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: students,
    });
}));
const updateStudentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_services_1.default.updateStudentByIdDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: student,
    });
}));
const patchStudentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_services_1.default.patchStudentByIdDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: student,
    });
}));
const updateManyStudents = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_services_1.default.updateManyStudentsDB(req.body.filter, req.body.updateData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: result,
    });
}));
const deleteStudentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_services_1.default.deleteStudentByIdDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: student,
    });
}));
const deleteManyStudents = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_services_1.default.deleteManyStudentsDB(req.body.filter);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Student get Successfull',
        data: result,
    });
}));
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
