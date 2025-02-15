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
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const academicSamister_services_1 = __importDefault(require("./academicSamister.services"));
const createAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const semester = req.body;
    const newSemester = yield academicSamister_services_1.default.createAcademicSemester(semester);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic semester created successfully.',
        data: newSemester,
    });
}));
const getAllAcademicSemesters = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const semesters = yield academicSamister_services_1.default.getAllAcademicSemesters();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All academic semesters retrieved successfully.',
        data: semesters,
    });
}));
const getAcademicSemesterById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const semester = yield academicSamister_services_1.default.getAcademicSemesterById(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic semester retrieved successfully.',
        data: semester,
    });
}));
const updateAcademicSemesterById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedSemester = yield academicSamister_services_1.default.updateAcademicSemesterById(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic semester updated successfully.',
        data: updatedSemester,
    });
}));
const deleteAcademicSemesterById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedSemester = yield academicSamister_services_1.default.deleteAcademicSemesterById(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic semester deleted successfully.',
        data: deletedSemester,
    });
}));
const getAcademicSemestersByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const semesters = yield academicSamister_services_1.default.getAcademicSemestersByField(query);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic semesters retrieved successfully.',
        data: semesters,
    });
}));
const updateAcademicSemestersByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const updatedSemesters = yield academicSamister_services_1.default.updateAcademicSemestersByField(query, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic semesters updated successfully.',
        data: updatedSemesters,
    });
}));
const deleteAcademicSemestersByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const deletedSemesters = yield academicSamister_services_1.default.deleteAcademicSemestersByField(query);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic semesters deleted successfully.',
        data: deletedSemesters,
    });
}));
const academicController = {
    createAcademicSemester,
    getAllAcademicSemesters,
    getAcademicSemesterById,
    getAcademicSemestersByField,
    updateAcademicSemesterById,
    updateAcademicSemestersByField,
    deleteAcademicSemesterById,
    deleteAcademicSemestersByField,
};
exports.default = academicController;
