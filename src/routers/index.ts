import express from 'express';
import { student_router } from '../module/student/student.router';
import { user_router } from '../module/user/user.router';

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
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
