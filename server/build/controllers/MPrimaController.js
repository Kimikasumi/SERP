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
class MPrimaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT * FROM MATERIA_PRIMA');
            res.json(consulta);
        });
    }
    ;
    mpAnio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT YEAR(fecha_compra) as fecha,COUNT(cod_m_prima) as cantidad FROM materia_prima GROUP BY YEAR(fecha_compra)');
            res.json(consulta);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_m_prima } = req.params;
            console.log(req.params);
            const mPrima = yield database_1.default.query('SELECT * FROM MATERIA_PRIMA WHERE cod_m_prima=?', [cod_m_prima]);
            if (mPrima.length > 0) {
                return res.json(mPrima[0]);
            }
            return res.status(404).json({ text: 'No existe la materia prima' });
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO MATERIA_PRIMA SET ?', [req.body]);
            res.json({ message: 'Materia Prima Guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_m_prima } = req.params;
            yield database_1.default.query('DELETE FROM MATERIA_PRIMA WHERE cod_m_prima= ?', [cod_m_prima]);
            res.json({ text: 'Borrando cod_m_prima ' + req.params.cod_m_prima });
        });
    }
    update(req, res) {
        const { cod_m_prima } = req.params;
        database_1.default.query('UPDATE MATERIA_PRIMA SET ? WHERE cod_m_prima = ?', [req.body, cod_m_prima]);
        res.json({ text: 'Actualizando Materia Prima ' + req.params.cod_m_prima });
    }
}
const mPrimacontroller = new MPrimaController();
exports.default = mPrimacontroller;
