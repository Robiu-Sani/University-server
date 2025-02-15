"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faculty_router = void 0;
const express_1 = __importDefault(require("express"));
const faculty_controllar_1 = __importDefault(require("./faculty.controllar"));
const router = express_1.default.Router();
router.post('/', faculty_controllar_1.default.createAcademicFaculty);
router.get('/', faculty_controllar_1.default.getAllAcademicFacultys);
router.get('/:id', faculty_controllar_1.default.getAcademicFacultyById);
router.put('/:id', faculty_controllar_1.default.updateAcademicFacultyById);
router.patch('/:id', faculty_controllar_1.default.updateAcademicFacultyById);
router.delete('/:id', faculty_controllar_1.default.deleteAcademicFacultyById);
router.get('/filter', faculty_controllar_1.default.getAcademicFacultysByField);
router.put('/filter', faculty_controllar_1.default.updateAcademicFacultysByField);
router.delete('/filter', faculty_controllar_1.default.deleteAcademicFacultysByField);
exports.faculty_router = router;
