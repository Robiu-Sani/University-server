"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_router = void 0;
const express_1 = __importDefault(require("express"));
const user_controllar_1 = __importDefault(require("./user.controllar"));
const router = express_1.default.Router();
router.post('/create', user_controllar_1.default.createUser);
router.get('/', user_controllar_1.default.getAllUsers);
router.get('/Users/get-single-User/:id', user_controllar_1.default.getUserById);
router.get('/fild', user_controllar_1.default.getUserByFildName);
router.put('/Users/put-single-User/:id', user_controllar_1.default.updateUserById);
router.patch('/Users/patch-single-User/:id', user_controllar_1.default.patchUserById);
router.put('/Users/update-many', user_controllar_1.default.updateManyUsers);
router.delete('/Users/selete-single-User/:id', user_controllar_1.default.deleteUserById);
router.delete('/Users/delete-many', user_controllar_1.default.deleteManyUsers);
exports.user_router = router;
