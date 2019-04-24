"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const presupuestoController_1 = __importDefault(require("../controllers/presupuestoController"));
class PresupuestoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', presupuestoController_1.default.list);
        this.router.get('/:id', presupuestoController_1.default.getOne);
        this.router.post('/:id', presupuestoController_1.default.create);
        this.router.put('/:id', presupuestoController_1.default.update);
        this.router.delete('/:id', presupuestoController_1.default.delete);
    }
}
const presupuestoRoutes = new PresupuestoRoutes();
exports.default = presupuestoRoutes.router;
