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
class SolicitudPController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT * FROM SOLICITUD_PRESUPUESTO');
            res.json(consulta);
        });
    }
    ;
    list2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT cod_solicitud_presupuesto, nom_repeticion_semanal, desc_solicitud_presupuesto,' +
                'valor_presupuesto, area_solicitante, nom_estado_solicitud FROM solicitud_presupuesto, ' +
                'repeticion_semanal, estado_solicitud WHERE repeticion_semanal.cod_repeticion_semanal = ' +
                ' solicitud_presupuesto.cod_repeticion_semanal AND  ' +
                'solicitud_presupuesto.cod_estado = estado_solicitud.cod_estado_solicitud ' +
                'GROUP by cod_solicitud_presupuesto, nom_repeticion_semanal, desc_solicitud_presupuesto, ' +
                'valor_presupuesto, area_solicitante, nom_estado_solicitud');
            res.json(consulta);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_solicitud_presupuesto } = req.params;
            console.log(req.params);
            const solicitudP = yield database_1.default.query('SELECT * FROM SOLICITUD_PRESUPUESTO WHERE cod_solicitud_presupuesto=?', [cod_solicitud_presupuesto]);
            if (solicitudP.length > 0) {
                return res.json(solicitudP[0]);
            }
            return res.status(404).json({ text: 'No existe la solicitud' });
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO SOLICITUD_PRESUPUESTO SET ?', [req.body]);
            res.json({ message: 'Solicitud Guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_solicitud_presupuesto } = req.params;
            yield database_1.default.query('DELETE FROM SOLICITUD_PRESUPUESTO WHERE cod_solicitud_presupuesto= ?', [cod_solicitud_presupuesto]);
            res.json({ text: 'Borrando Solicitud ' + req.params.cod_solicitud_presupuesto });
        });
    }
    update(req, res) {
        const { cod_solicitud_presupuesto } = req.params;
        database_1.default.query('UPDATE SOLICITUD_PRESUPUESTO SET ? WHERE cod_solicitud_presupuesto = ?', [req.body, cod_solicitud_presupuesto]);
        res.json({ text: 'Actualizando solicitud ' + req.params.cod_solicitud_presupuesto });
    }
}
const solicitudPController = new SolicitudPController();
exports.default = solicitudPController;
