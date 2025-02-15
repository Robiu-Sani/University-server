import express from 'express';
import { student_router } from '../module/student/student.router';
import { user_router } from '../module/user/user.router';
import { academi_router } from '../module/academicSamister/academicSamister.router';

const router = express.Router();

const moduleRoute = [
  {
    path: '/student',
    route: student_router,
  },
  {
    path: '/user',
    route: user_router,
  },
  {
    path: '/academi',
    route: academi_router,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
