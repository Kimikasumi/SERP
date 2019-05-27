"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class RetailersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retailers = yield database_1.default.query('SELECT SUCURSAL.nom_sucursal, CIUDAD.nom_ciudad, SUCURSAL.direc FROM sucursal, ciudad WHERE ciudad.cod_ciudad = sucursal.cod_ciudad');
            res.json(retailers);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_sucursal } = req.params;
            const retailer = yield database_1.default.query('SELECT * FROM sucursal WHERE cod_sucursal = ?', [cod_sucursal]);
            if (retailer.length > 0) {
                return res.json(retailer[0]);
            }
            res.status(404).json({ text: 'sucursal no encontrada' });
        });
    }
    getPerProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_producto } = req.params;
            const retailers = yield database_1.default.query('SELECT SUCURSAL.nom_sucursal, CIUDAD.nom_ciudad, SUCURSAL.direc, INVENTARIO.cantidad FROM INVENTARIO, SUCURSAL, PRODUCTO, CIUDAD where CIUDAD.cod_ciudad = SUCURSAL.cod_ciudad and PRODUCTO.cod_producto = INVENTARIO.cod_producto and INVENTARIO.cod_sucursal = SUCURSAL.cod_sucursal and PRODUCTO.cod_producto = ?', [cod_producto]);
            if (retailers.length > 0) {
                return res.json(retailers);
            }
            console.log('xdx2');
            res.status(404).json({ text: 'sucursal no encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO sucursal set ?', [req.body]);
            res.json({ text: 'sucursal guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_sucursal } = req.params;
            yield database_1.default.query('DELETE FROM sucursal WHERE cod_sucursal = ?', [cod_sucursal]);
            res.json({ message: 'La sucursal se elimino' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_sucursal } = req.params;
            yield database_1.default.query('UPDATE sucursal set ? WHERE cod_sucursal = ?', [req.body, cod_sucursal]);
            res.json({ message: 'La sucursal se ha actualizado' });
        });
    }
    solicitar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO solicitud_inv set ?', [req.body]);
            res.json({ text: 'Solicitud enviada' });
        });
    }
    getCantidadProductoSucursal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield database_1.default.query('SELECT sucursal.nom_sucursal as Nombre, sum(inventario.cantidad) as Cantidad FROM sucursal, inventario WHERE sucursal.cod_sucursal = inventario.cod_sucursal GROUP BY nom_sucursal');
            if (p.length > 0) {
                return res.json(p);
            }
            res.status(404).json({ text: 'Hubo un error en las sucursales' });
        });
    }
    ;
    getValorInventarioSucursal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield database_1.default.query('SELECT sucursal.nom_sucursal as Nombre,  sum(inventario.cantidad * producto.precio_unitario) as Valor FROM sucursal, inventario, producto WHERE sucursal.cod_sucursal = inventario.cod_sucursal and inventario.cod_producto = producto.cod_producto GROUP BY sucursal.nom_sucursal');
            if (p.length > 0) {
                return res.json(p);
            }
            res.status(404).json({ text: 'Hubo un error en las sucursales' });
        });
    }
    ;
    getValorInventarioCiudad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield database_1.default.query('SELECT ciudad.nom_ciudad as Ciudad,  sum(inventario.cantidad * producto.precio_unitario) as Valor FROM ciudad, sucursal, inventario, producto WHERE ciudad.cod_ciudad = sucursal.cod_ciudad and sucursal.cod_sucursal = inventario.cod_sucursal and inventario.cod_producto = producto.cod_producto GROUP BY ciudad.nom_ciudad');
            if (p.length > 0) {
                console.log(p);
                return res.json(p);
            }
            res.status(404).json({ text: 'Hubo un error en las sucursales' });
        });
    }
    ;
}
const retailersController = new RetailersController();
exports.default = retailersController;
