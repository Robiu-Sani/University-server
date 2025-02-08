import express from 'express';
import UserController from './user.controllar';

const router = express.Router();

router.post('/create', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/Users/get-single-User/:id', UserController.getUserById);
router.get('/fild', UserController.getUserByFildName);

router.put('/Users/put-single-User/:id', UserController.updateUserById);
router.patch('/Users/patch-single-User/:id', UserController.patchUserById);
router.put('/Users/update-many', UserController.updateManyUsers);
router.delete('/Users/selete-single-User/:id', UserController.deleteUserById);
router.delete('/Users/delete-many', UserController.deleteManyUsers);

export const user_router = router;
