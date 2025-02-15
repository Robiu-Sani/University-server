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
const department_model_1 = __importDefault(require("./department.model"));
const createAcademicDepartment = (semester) => __awaiter(void 0, void 0, void 0, function* () {
    return yield department_model_1.default.create(semester);
});
const getAllAcademicDepartments = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield department_model_1.default.find();
});
const getAcademicDepartmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield department_model_1.default.findById(id);
});
const updateAcademicDepartmentById = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield department_model_1.default.findByIdAndUpdate(id, updateData, {
        new: true,
    });
});
const deleteAcademicDepartmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield department_model_1.default.findByIdAndDelete(id);
});
const getAcademicDepartmentsByField = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield department_model_1.default.find(query);
});
const updateAcademicDepartmentsByField = (query, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield department_model_1.default.updateMany(query, updateData, { new: true });
});
const deleteAcademicDepartmentsByField = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield department_model_1.default.deleteMany(query);
});
const departmentServices = {
    createAcademicDepartment,
    getAcademicDepartmentById,
    getAcademicDepartmentsByField,
    getAllAcademicDepartments,
    updateAcademicDepartmentById,
    updateAcademicDepartmentsByField,
    deleteAcademicDepartmentById,
    deleteAcademicDepartmentsByField,
};
exports.default = departmentServices;
