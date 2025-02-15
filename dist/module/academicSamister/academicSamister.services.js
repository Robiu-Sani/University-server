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
const academicSamister_model_1 = __importDefault(require("./academicSamister.model"));
const createAcademicSemester = (semester) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield academicSamister_model_1.default.findOne({
        name: semester.name,
        year: semester.year,
    });
    if (isExist) {
        throw new Error('There is already an existing semester');
    }
    return yield academicSamister_model_1.default.create(semester);
});
const getAllAcademicSemesters = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield academicSamister_model_1.default.find();
});
const getAcademicSemesterById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield academicSamister_model_1.default.findById(id);
});
const updateAcademicSemesterById = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield academicSamister_model_1.default.findByIdAndUpdate(id, updateData, {
        new: true,
    });
});
const deleteAcademicSemesterById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield academicSamister_model_1.default.findByIdAndDelete(id);
});
const getAcademicSemestersByField = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield academicSamister_model_1.default.find(query);
});
const updateAcademicSemestersByField = (query, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield academicSamister_model_1.default.updateMany(query, updateData, { new: true });
});
const deleteAcademicSemestersByField = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield academicSamister_model_1.default.deleteMany(query);
});
const academicServices = {
    createAcademicSemester,
    getAcademicSemesterById,
    getAcademicSemestersByField,
    getAllAcademicSemesters,
    updateAcademicSemesterById,
    updateAcademicSemestersByField,
    deleteAcademicSemesterById,
    deleteAcademicSemestersByField,
};
exports.default = academicServices;
