"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProduccionController_1 = __importDefault(require("../../controllers/controllerProduccion/ProduccionController"));
class ProduccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ProduccionController_1.default.list);
        this.router.get('/:cod_funcionario', ProduccionController_1.default.getOne);
        this.router.post('/', ProduccionController_1.default.create);
        this.router.delete('/:cod_funcionario', ProduccionController_1.default.delete);
        this.router.put('/:cod_funcionario', ProduccionController_1.default.update);
    }
}
const produccionRoutes = new ProduccionRoutes();
exports.default = produccionRoutes.router;
