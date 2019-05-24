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
class SolicitudInventarioControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('select cod_solicitud,nom_sucursal,nom_producto,solicitud_inv.cantidad,nom_estado_solicitud FROM solicitud_inv, estado_solicitud, sucursal, producto WHERE solicitud_inv.cod_estado=estado_solicitud.cod_estado_solicitud AND solicitud_inv.cod_sucursal=sucursal.cod_sucursal AND solicitud_inv.cod_producto=producto.cod_producto');
            res.json(consulta);
        });
    }
    ;
    list2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('select * from solicitud_inv');
            res.json(consulta);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_solicitud } = req.params;
            console.log(req.params);
            const solicitudI = yield database_1.default.query('SELECT * FROM SOLICITUD_INV WHERE cod_solicitud=?', [cod_solicitud]);
            if (solicitudI.length > 0) {
                return res.json(solicitudI[0]);
            }
            return res.status(404).json({ text: 'No existe la solicitud' });
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO SOLICITUD_INV SET ?', [req.body]);
            res.json({ message: 'Solicitud Guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_solicitud } = req.params;
            yield database_1.default.query('DELETE FROM SOLICITUD_INV WHERE cod_solicitud= ?', [cod_solicitud]);
            res.json({ text: 'Borrando Solicitud ' + req.params.cod_solicitud });
        });
    }
    update(req, res) {
        const { cod_solicitud } = req.params;
        database_1.default.query('UPDATE SOLICITUD_INV SET ? WHERE cod_solicitud = ?', [req.body, cod_solicitud]);
        res.json({ text: 'Actualizando solicitud ' + req.params.cod_solicitud });
    }
}
const solicitudInventarioControllers = new SolicitudInventarioControllers();
exports.default = solicitudInventarioControllers;
