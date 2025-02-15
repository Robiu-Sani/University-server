"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AcademicSemesterSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        enum: ['Autumn', 'Summar', 'Fall'],
        required: true,
    },
    code: {
        type: String,
        enum: ['01', '02', '03'],
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    startMonth: {
        type: String,
        enum: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
        required: true,
    },
    endMonth: {
        type: String,
        enum: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
        required: true,
    },
});
const AcademicSemester = mongoose_1.default.model('AcademicSemester', AcademicSemesterSchema);
exports.default = AcademicSemester;
