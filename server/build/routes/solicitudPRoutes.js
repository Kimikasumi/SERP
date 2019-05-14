"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SolicitudPController_1 = __importDefault(require("../controllers/SolicitudPController"));
class solicitudPRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', SolicitudPController_1.default.list2);
        this.router.get('/:cod_solicitud_presupuesto', SolicitudPController_1.default.getOne);
        this.router.post('/', SolicitudPController_1.default.create);
        this.router.delete('/:cod_solicitud_presupuesto', SolicitudPController_1.default.delete);
        this.router.put('/:cod_solicitud_presupuesto', SolicitudPController_1.default.update);
    }
}
const solicitudpRoutes = new solicitudPRoutes();
exports.default = solicitudpRoutes.router;
