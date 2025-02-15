import express from 'express';
import academicController from './academicSamister.controllar';

const router = express.Router();

router.post('/', academicController.createAcademicSemester);
router.get('/', academicController.getAllAcademicSemesters);
router.get('/:id', academicController.getAcademicSemesterById);
router.put('/:id', academicController.updateAcademicSemesterById);
router.patch('/:id', academicController.updateAcademicSemesterById);
router.delete('/:id', academicController.deleteAcademicSemesterById);
router.get('/filter', academicController.getAcademicSemestersByField);
router.put('/filter', academicController.updateAcademicSemestersByField);
router.delete('/filter', academicController.deleteAcademicSemestersByField);

export const academi_router = router;
