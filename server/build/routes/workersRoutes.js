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
        this.router.get('/listado', workersController_1.default.list);
        this.router.get('/all', workersController_1.default.listAll);
        this.router.get('/getOne/:cedula', workersController_1.default.getOne);
        this.router.post('/', workersController_1.default.create);
        this.router.delete('/delete/:cedula', workersController_1.default.delete);
        this.router.put('/update/:cedula', workersController_1.default.update);
        this.router.get('/getCargos', workersController_1.default.getCargos);
        this.router.get('/getModulos', workersController_1.default.getModulos);
        this.router.get('/getSucursales', workersController_1.default.getSucursales);
    }
}
const workersRoutes = new WorkersRoutes();
exports.default = workersRoutes.router;
