"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workersController_1 = __importDefault(require("../controllers/workersController"));
class WorkersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', workersController_1.default.list);
        this.router.get('/:cod_funcionario', workersController_1.default.getOne);
        this.router.post('/', workersController_1.default.create);
        this.router.delete('/:cod_funcionario', workersController_1.default.delete);
        this.router.put('/:cod_funcionario', workersController_1.default.update);
    }
}
const workersRoutes = new WorkersRoutes();
exports.default = workersRoutes.router;
