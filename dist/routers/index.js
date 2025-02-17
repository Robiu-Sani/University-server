"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_router_1 = require("../module/student/student.router");
const user_router_1 = require("../module/user/user.router");
const academicSamister_router_1 = require("../module/academicSamister/academicSamister.router");
const faculty_router_1 = require("../module/faculty/faculty.router");
const department_router_1 = require("../module/department/department.router");
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: '/student',
        route: student_router_1.student_router,
    },
    {
        path: '/user',
        route: user_router_1.user_router,
    },
    {
        path: '/samester',
        route: academicSamister_router_1.academi_router,
    },
    {
        path: '/faculty',
        route: faculty_router_1.faculty_router,
    },
    {
        path: '/department',
        route: department_router_1.department_router,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
