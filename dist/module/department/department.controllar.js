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
const department_services_1 = __importDefault(require("./department.services"));
const createAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Department = req.body;
    const newDepartment = yield department_services_1.default.createAcademicDepartment(Department);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic Department created successfully.',
        data: newDepartment,
    });
}));
const getAllAcademicDepartments = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Departments = yield department_services_1.default.getAllAcademicDepartments();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All academic Departments retrieved successfully.',
        data: Departments,
    });
}));
const getAcademicDepartmentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Department = yield department_services_1.default.getAcademicDepartmentById(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic Department retrieved successfully.',
        data: Department,
    });
}));
const updateAcademicDepartmentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedDepartment = yield department_services_1.default.updateAcademicDepartmentById(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic Department updated successfully.',
        data: updatedDepartment,
    });
}));
const deleteAcademicDepartmentById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedDepartment = yield department_services_1.default.deleteAcademicDepartmentById(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Academic Department deleted successfully.',
        data: deletedDepartment,
    });
}));
const getAcademicDepartmentsByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const Departments = yield department_services_1.default.getAcademicDepartmentsByField(query);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic Departments retrieved successfully.',
        data: Departments,
    });
}));
const updateAcademicDepartmentsByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const updatedDepartments = yield department_services_1.default.updateAcademicDepartmentsByField(query, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic Departments updated successfully.',
        data: updatedDepartments,
    });
}));
const deleteAcademicDepartmentsByField = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const deletedDepartments = yield department_services_1.default.deleteAcademicDepartmentsByField(query);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Filtered academic Departments deleted successfully.',
        data: deletedDepartments,
    });
}));
const DepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartments,
    getAcademicDepartmentById,
    getAcademicDepartmentsByField,
    updateAcademicDepartmentById,
    updateAcademicDepartmentsByField,
    deleteAcademicDepartmentById,
    deleteAcademicDepartmentsByField,
};
exports.default = DepartmentController;
