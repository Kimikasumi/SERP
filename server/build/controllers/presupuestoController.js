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
class PresupuestoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const presupuestos = yield database_1.default.query('SELECT sp.cod_solicitud_presupuesto, sp.desc_solicitud_presupuesto, rp.nom_repeticion_semanal, sp.valor_presupuesto, sp.area_solicitante, es.nom_estado_solicitud, cuenta.nom_cuenta FROM solicitud_presupuesto sp, repeticion_semanal rp, estado_solicitud es, cuenta WHERE sp.cod_cuenta = cuenta.cod_cuenta and sp.cod_repeticion_semanal = rp.cod_repeticion_semanal and es.cod_estado_solicitud = sp.cod_estado');
            res.json(presupuestos);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const p = yield database_1.default.query('SELECT * FROM solicitud_presupuesto WHERE cod_solicitud_presupuesto = ?', [id]);
            if (p.length > 0) {
                return res.json(p[0]);
            }
            res.status(404).json({ text: 'La solicitud de presupuesto no existe' });
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO solicitud_presupuesto set ?', [req.body]);
            res.json({ message: 'solicitud presupuesto Creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM solicitud_presupuesto WHERE cod_solicitud_presupuesto = ?', [id]);
            res.json({ message: 'La solicitud_presupuesto fue eliminado' });
        });
    }
    ;
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const cod = Number(req.body.cod_estado);
            yield database_1.default.query('UPDATE solicitud_presupuesto SET COD_ESTADO=? WHERE cod_solicitud_presupuesto = ?', [cod, id]);
            res.json({ message: 'La solicitud_presupuesto fue modificado' });
        });
    }
    getSolicitudes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield database_1.default.query('SELECT es.nom_estado_solicitud as Estado, count(sp.cod_estado) as Cantidad FROM solicitud_presupuesto sp, estado_solicitud es WHERE sp.cod_estado = es.cod_estado_solicitud GROUP BY es.nom_estado_solicitud');
            if (p.length > 0) {
                return res.json(p);
            }
            res.status(404).json({ text: 'No hay solicitudes en el sistema' });
        });
    }
    ;
    getPresupuestoAreas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield database_1.default.query('SELECT nom_cuenta as Cuenta, saldo as Presupuesto FROM CUENTA');
            if (p.length > 0) {
                return res.json(p);
            }
            res.status(404).json({ text: 'No hay solicitudes en el sistema' });
        });
    }
    ;
    getPresupuestoTotal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield database_1.default.query('SELECT sum(saldo) as Presupuesto FROM CUENTA');
            if (p.length > 0) {
                return res.json(p);
            }
            res.status(404).json({ text: 'No hay solicitudes en el sistema' });
        });
    }
    ;
    getEstados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estados = yield database_1.default.query('SELECT * FROM estado_solicitud');
            res.json(estados);
        });
    }
    ;
    getRepeticion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repeticion = yield database_1.default.query('SELECT * FROM repeticion_semanal');
            res.json(repeticion);
        });
    }
    getCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuenta = yield database_1.default.query('SELECT * FROM cuenta');
            res.json(cuenta);
        });
    }
}
const presupuestoController = new PresupuestoController();
exports.default = presupuestoController;
