import studentController from './student.controllar';
import express from 'express';

const router = express.Router();

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get(
  '/students/get-single-student/:id',
  studentController.getStudentById,
);
router.get('/students/active', studentController.getActiveStudents);
router.get('/students/inactive', studentController.getInactiveStudents);
router.get(
  '/students/get-by-email/:email',
  studentController.getStudentByEmail,
);
router.get('/students/gender/:gender', studentController.getStudentsByGender);
router.get(
  '/students/bloodgroup/:bloodGroup',
  studentController.getStudentsByBloodGroup,
);
router.put(
  '/students/put-single-student/:id',
  studentController.updateStudentById,
);
router.patch(
  '/students/patch-single-student/:id',
  studentController.patchStudentById,
);
router.put('/students/update-many', studentController.updateManyStudents);
router.delete(
  '/students/selete-single-student/:id',
  studentController.deleteStudentById,
);
router.delete('/students/delete-many', studentController.deleteManyStudents);

export const student_router = router;
