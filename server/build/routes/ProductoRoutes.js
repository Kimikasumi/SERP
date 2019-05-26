"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductoController_1 = __importDefault(require("../controllers/ProductoController"));
class ProduccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ProductoController_1.default.list);
        this.router.get('/Promedio', ProductoController_1.default.prom);
        this.router.get('/Plazos1', ProductoController_1.default.plazos1);
        this.router.get('/Plazos2', ProductoController_1.default.plazos2);
        this.router.get('/Mayor', ProductoController_1.default.mayor);
        this.router.get('/:cod_producto', ProductoController_1.default.getOne);
        this.router.post('/', ProductoController_1.default.create);
        this.router.delete('/:cod_producto', ProductoController_1.default.delete);
        this.router.put('/:cod_producto', ProductoController_1.default.update);
    }
}
const produccionRoutes = new ProduccionRoutes();
exports.default = produccionRoutes.router;
