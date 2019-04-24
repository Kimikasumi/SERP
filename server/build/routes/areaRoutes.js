"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const areaController_1 = __importDefault(require("../controllers/areaController"));
class AreaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', areaController_1.default.list);
        this.router.get('/:id', areaController_1.default.getOne);
        this.router.post('/', areaController_1.default.create);
        this.router.put('/:id', areaController_1.default.update);
        this.router.delete('/:id', areaController_1.default.delete);
    }
}
const areaRoutes = new AreaRoutes();
exports.default = areaRoutes.router;
