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
        this.router.get('/listadoP', presupuestoController_1.default.list);
        this.router.get('/listadoOneP/:id', presupuestoController_1.default.getOne);
        this.router.post('/createP', presupuestoController_1.default.create);
        this.router.put('/updateP/:id', presupuestoController_1.default.update);
        this.router.delete('/deleteP/:id', presupuestoController_1.default.delete);
        this.router.get('/getSolicitudes', presupuestoController_1.default.getSolicitudes);
        this.router.get('/getPresupuestoAreas', presupuestoController_1.default.getPresupuestoAreas);
        this.router.get('/getPresupuestoTotal', presupuestoController_1.default.getPresupuestoTotal);
        this.router.get('/getEstados', presupuestoController_1.default.getEstados);
        this.router.get('/getRepeticion', presupuestoController_1.default.getRepeticion);
        this.router.get('/getCuenta', presupuestoController_1.default.getCuenta);
    }
}
const presupuestoRoutes = new PresupuestoRoutes();
exports.default = presupuestoRoutes.router;
