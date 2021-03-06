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
        this.router.get('/:cod_sucursal', retailersControllers_1.default.getOne);
        this.router.get('/product/:cod_producto', retailersControllers_1.default.getPerProduct);
        this.router.post('/', retailersControllers_1.default.create);
        this.router.delete('/:cod_sucursal', retailersControllers_1.default.delete);
        this.router.put('/:cod_sucursal', retailersControllers_1.default.update);
        this.router.post('/solicitar', retailersControllers_1.default.solicitar);
        this.router.get('/dashboard/getCantidadProductoSucursal', retailersControllers_1.default.getCantidadProductoSucursal);
        this.router.get('/dashboard/getValorInventarioSucursal', retailersControllers_1.default.getValorInventarioSucursal);
        this.router.get('/dashboard/getValorInventarioCiudad', retailersControllers_1.default.getValorInventarioCiudad);
        this.router.get('/ux/getCiudades', retailersControllers_1.default.getCiudades);
        this.router.get('/ux/getSucursales', retailersControllers_1.default.getSucursales);
        this.router.get('/ux/getProducto', retailersControllers_1.default.getProducto);
        this.router.get('/ux/products', retailersControllers_1.default.getProductos);
    }
}
const retailersRoutes = new RetailersRoutes();
exports.default = retailersRoutes.router;
