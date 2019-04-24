"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const retailersControllers_1 = __importDefault(require("../controllers/retailersControllers"));
class RetailersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', retailersControllers_1.default.list);
        this.router.get('/:cod_retail', retailersControllers_1.default.getOne);
        this.router.post('/', retailersControllers_1.default.create);
        this.router.delete('/:cod_retail', retailersControllers_1.default.delete);
        this.router.put('/:cod_retail', retailersControllers_1.default.update);
    }
}
const retailersRoutes = new RetailersRoutes();
exports.default = retailersRoutes.router;
