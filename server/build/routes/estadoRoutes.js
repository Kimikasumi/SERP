"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoController_1 = __importDefault(require("../controllers/estadoController"));
class EstadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', estadoController_1.default.list);
        this.router.get('/:id', estadoController_1.default.getOne);
        this.router.post('/', estadoController_1.default.create);
        this.router.put('/:id', estadoController_1.default.update);
        this.router.delete('/:id', estadoController_1.default.delete);
    }
}
const estadoRoutes = new EstadoRoutes();
exports.default = estadoRoutes.router;
