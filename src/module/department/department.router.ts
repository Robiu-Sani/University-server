import express from 'express';
import DepartmentController from './department.controllar';

const router = express.Router();

router.post('/', DepartmentController.createAcademicDepartment);
router.get('/', DepartmentController.getAllAcademicDepartments);
router.get('/:id', DepartmentController.getAcademicDepartmentById);
router.put('/:id', DepartmentController.updateAcademicDepartmentById);
router.patch('/:id', DepartmentController.updateAcademicDepartmentById);
router.delete('/:id', DepartmentController.deleteAcademicDepartmentById);
router.get('/filter', DepartmentController.getAcademicDepartmentsByField);
router.put('/filter', DepartmentController.updateAcademicDepartmentsByField);
router.delete('/filter', DepartmentController.deleteAcademicDepartmentsByField);

export const department_router = router;
