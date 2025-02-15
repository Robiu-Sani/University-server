"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.department_router = void 0;
const express_1 = __importDefault(require("express"));
const department_controllar_1 = __importDefault(require("./department.controllar"));
const router = express_1.default.Router();
router.post('/', department_controllar_1.default.createAcademicDepartment);
router.get('/', department_controllar_1.default.getAllAcademicDepartments);
router.get('/:id', department_controllar_1.default.getAcademicDepartmentById);
router.put('/:id', department_controllar_1.default.updateAcademicDepartmentById);
router.patch('/:id', department_controllar_1.default.updateAcademicDepartmentById);
router.delete('/:id', department_controllar_1.default.deleteAcademicDepartmentById);
router.get('/filter', department_controllar_1.default.getAcademicDepartmentsByField);
router.put('/filter', department_controllar_1.default.updateAcademicDepartmentsByField);
router.delete('/filter', department_controllar_1.default.deleteAcademicDepartmentsByField);
exports.department_router = router;
