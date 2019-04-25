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
            const presupuestos = yield database_1.default.query('SELECT * FROM PRESUPUESTOS');
            res.json(presupuestos);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const p = yield database_1.default.query('SELECT * FROM PRESUPUESTOS WHERE cod_presupuesto = ?', [id]);
            if (p.length > 0) {
                return res.json(p[0]);
            }
            res.status(404).json({ text: 'El presupuesto no existe' });
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO presupuestos set ?', [req.body]);
            res.json({ message: 'Presupuesto Creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM PRESUPUESTOS WHERE cod_presupuesto = ?', [id]);
            res.json({ message: 'El presupuesto fue eliminado' });
        });
    }
    ;
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE FROM PRESUPUESTOS WHERE cod_presupuesto = ?', [id]);
            res.json({ message: 'El presupuesto fue modificado' });
        });
    }
}
const presupuestoController = new PresupuestoController();
exports.default = presupuestoController;
