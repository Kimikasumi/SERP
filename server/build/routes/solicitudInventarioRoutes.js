"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitudInventarioControllers_1 = __importDefault(require("../controllers/solicitudInventarioControllers"));
class solicitudInventarioPRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', solicitudInventarioControllers_1.default.list);
        this.router.get('/list', solicitudInventarioControllers_1.default.list2);
        this.router.get('/:cod_solicitud', solicitudInventarioControllers_1.default.getOne);
        this.router.post('/', solicitudInventarioControllers_1.default.create);
        this.router.delete('/:cod_solicitud', solicitudInventarioControllers_1.default.delete);
        this.router.put('/:cod_solicitud', solicitudInventarioControllers_1.default.update);
    }
}
const solicitudIRoutes = new solicitudInventarioPRoutes();
exports.default = solicitudIRoutes.router;
