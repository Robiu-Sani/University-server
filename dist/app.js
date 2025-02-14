"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const GlobalErrorHandler_1 = __importDefault(require("./middlwear/GlobalErrorHandler"));
const notFound_1 = __importDefault(require("./middlwear/notFound"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//routers
app.use('/api/v1', routers_1.default);
app.get('/', (req, res) => {
    res.send('PH University');
});
app.use(GlobalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
