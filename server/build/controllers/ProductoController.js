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
class ProduccionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT * FROM PRODUCTO');
            res.json(consulta);
        });
    }
    ;
    prom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT AVG(precio_unitario*cantidad) as prom FROM PRODUCTO');
            res.json(consulta);
        });
    }
    ;
    plazos1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT COUNT(cod_solicitud) as total FROM solicitud_inv');
            res.json(consulta);
        });
    }
    ;
    plazos2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT COUNT(cod_solicitud) as parcial FROM solicitud_inv WHERE cod_estado=2');
            res.json(consulta);
        });
    }
    ;
    mayor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT nom_m_prima FROM materia_prima ORDER BY cantidad DESC');
            res.json(consulta);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_producto } = req.params;
            console.log(req.params);
            const producto = yield database_1.default.query('SELECT * FROM PRODUCTO WHERE cod_producto=?', [cod_producto]);
            if (producto.length > 0) {
                return res.json(producto[0]);
            }
            return res.status(404).json({ text: 'No existe el producto' });
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO PRODUCTO SET ?', [req.body]);
            res.json({ message: 'Producto Guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_producto } = req.params;
            yield database_1.default.query('DELETE FROM PRODUCTO WHERE cod_producto= ?', [cod_producto]);
            res.json({ text: 'Borrando Producto ' + req.params.cod_producto });
        });
    }
    update(req, res) {
        const { cod_producto } = req.params;
        database_1.default.query('UPDATE PRODUCTO SET ? WHERE cod_producto = ?', [req.body, cod_producto]);
        res.json({ text: 'Actualizando Producto ' + req.params.cod_producto });
    }
}
const produccioncontroller = new ProduccionController();
exports.default = produccioncontroller;
