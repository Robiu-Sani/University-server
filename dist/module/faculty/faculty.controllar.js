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
const faculty_services_1 = __importDefault(require("./faculty.services"));
const createAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Faculty = req.body;
    const newFaculty = yield faculty_services_1.default.createAcademicFaculty(Faculty);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic Faculty created successfully.',
        data: newFaculty,
    });
}));
const getAllAcademicFacultys = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Facultys = yield faculty_services_1.default.getAllAcademicFacultys();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All academic Facultys retrieved successfully.',
        data: Facultys,
    });
}));
const getAcademicFacultyById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Faculty = yield faculty_services_1.default.getAcademicFacultyById(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic Faculty retrieved successfully.',
        data: Faculty,
    });
}));
const updateAcademicFacultyById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedFaculty = yield faculty_services_1.default.updateAcademicFacultyById(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic Faculty updated successfully.',
        data: updatedFaculty,
    });
}));
const deleteAcademicFacultyById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedFaculty = yield faculty_services_1.default.deleteAcademicFacultyById(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic Faculty deleted successfully.',
        data: deletedFaculty,
    });
}));
const getAcademicFacultysByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const Facultys = yield faculty_services_1.default.getAcademicFacultysByField(query);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic Facultys retrieved successfully.',
        data: Facultys,
    });
}));
const updateAcademicFacultysByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const updatedFacultys = yield faculty_services_1.default.updateAcademicFacultysByField(query, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic Facultys updated successfully.',
        data: updatedFacultys,
    });
}));
const deleteAcademicFacultysByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const deletedFacultys = yield faculty_services_1.default.deleteAcademicFacultysByField(query);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic Facultys deleted successfully.',
        data: deletedFacultys,
    });
}));
const facultyController = {
    createAcademicFaculty,
    getAllAcademicFacultys,
    getAcademicFacultyById,
    getAcademicFacultysByField,
    updateAcademicFacultyById,
    updateAcademicFacultysByField,
    deleteAcademicFacultyById,
    deleteAcademicFacultysByField,
};
exports.default = facultyController;
