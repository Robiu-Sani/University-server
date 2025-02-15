import express from 'express';
import facultyController from './faculty.controllar';

const router = express.Router();

router.post('/', facultyController.createAcademicFaculty);
router.get('/', facultyController.getAllAcademicFacultys);
router.get('/:id', facultyController.getAcademicFacultyById);
router.put('/:id', facultyController.updateAcademicFacultyById);
router.patch('/:id', facultyController.updateAcademicFacultyById);
router.delete('/:id', facultyController.deleteAcademicFacultyById);
router.get('/filter', facultyController.getAcademicFacultysByField);
router.put('/filter', facultyController.updateAcademicFacultysByField);
router.delete('/filter', facultyController.deleteAcademicFacultysByField);

export const faculty_router = router;
