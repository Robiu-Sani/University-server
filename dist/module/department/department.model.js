"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const departmentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    faculty: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'faculty',
    },
}, { timestamps: true });
const AcademicDepartment = mongoose_1.default.model('department', departmentSchema);
exports.default = AcademicDepartment;
