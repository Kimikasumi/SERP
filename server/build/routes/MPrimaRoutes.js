"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MPrimaController_1 = __importDefault(require("../controllers/MPrimaController"));
class MPrimaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', MPrimaController_1.default.list);
        this.router.get('/mpAnio', MPrimaController_1.default.mpAnio);
        this.router.get('/:cod_m_prima', MPrimaController_1.default.getOne);
        this.router.post('/', MPrimaController_1.default.create);
        this.router.delete('/:cod_m_prima', MPrimaController_1.default.delete);
        this.router.put('/:cod_m_prima', MPrimaController_1.default.update);
    }
}
const mPrimaRoutes = new MPrimaRoutes();
exports.default = mPrimaRoutes.router;
