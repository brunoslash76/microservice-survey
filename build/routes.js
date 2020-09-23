"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Survey_1 = require("./controllers/Survey");
var route = express_1.default.Router();
route.post('/full-survey', Survey_1.save);
route.get('/full-survey', Survey_1.index);
exports.default = route;
