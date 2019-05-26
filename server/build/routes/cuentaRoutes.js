"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaController_1 = __importDefault(require("../controllers/cuentaController"));
class CuentaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/nomina', cuentaController_1.default.getNomina);
        this.router.get('/liquidacion/:cedula', cuentaController_1.default.getLiquidacion);
        this.router.get('/saldo/:cod_modulo', cuentaController_1.default.getSaldoCuenta);
        this.router.get('/update/:cod_cuenta/:saldo', cuentaController_1.default.update);
    }
}
const cuentaRoutes = new CuentaRoutes();
exports.default = cuentaRoutes.router;
