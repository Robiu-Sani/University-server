"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academi_router = void 0;
const express_1 = __importDefault(require("express"));
const academicSamister_controllar_1 = __importDefault(require("./academicSamister.controllar"));
const router = express_1.default.Router();
router.post('/', academicSamister_controllar_1.default.createAcademicSemester);
router.get('/', academicSamister_controllar_1.default.getAllAcademicSemesters);
router.get('/:id', academicSamister_controllar_1.default.getAcademicSemesterById);
router.put('/:id', academicSamister_controllar_1.default.updateAcademicSemesterById);
router.patch('/:id', academicSamister_controllar_1.default.updateAcademicSemesterById);
router.delete('/:id', academicSamister_controllar_1.default.deleteAcademicSemesterById);
router.get('/filter', academicSamister_controllar_1.default.getAcademicSemestersByField);
router.put('/filter', academicSamister_controllar_1.default.updateAcademicSemestersByField);
router.delete('/filter', academicSamister_controllar_1.default.deleteAcademicSemestersByField);
exports.academi_router = router;
