"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
// Create a new User
const createUserDB = (UserData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.create(UserData);
    return result;
});
// Get all Users
const getAllUsersDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.find();
});
// Get a single User by ID
const getUserByIdDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findById(id);
});
// Get a User by role
const getUserByFildDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne(data);
});
// Update a User by ID (PUT - replace entire document)
const updateUserByIdDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findByIdAndUpdate(id, updateData, { new: true });
});
// Update a User by ID (PATCH - partial update)
const patchUserByIdDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findByIdAndUpdate(id, { $set: updateData }, { new: true });
});
// Update many Users by criteria
const updateManyUsersDB = (filter, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.updateMany(filter, updateData);
});
// Delete a User by ID
const deleteUserByIdDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findByIdAndDelete(id);
});
// Delete many Users by criteria
const deleteManyUsersDB = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.deleteMany(filter);
});
const UserServices = {
    createUserDB,
    getAllUsersDB,
    getUserByIdDB,
    getUserByFildDB,
    updateUserByIdDB,
    patchUserByIdDB,
    updateManyUsersDB,
    deleteUserByIdDB,
    deleteManyUsersDB,
};
exports.default = UserServices;
