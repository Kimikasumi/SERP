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
class EstadoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estado = yield database_1.default.query('SELECT * FROM estado_presupuesto');
            res.json(estado);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const p = yield database_1.default.query('SELECT * FROM estado_presupuesto WHERE id = ?', [id]);
            if (p.length > 0) {
                return res.json(p[0]);
            }
            res.status(404).json({ text: 'El estado no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO estado_presupuesto set ?', [req.body]);
            res.json({ message: 'estado Creada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM estado_presupuesto WHERE id = ?', [id]);
            res.json({ message: 'El estado fue eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE FROM estado_presupuesto WHERE id = ?', [id]);
            res.json({ message: 'El estado fue modificado' });
        });
    }
}
const estadoController = new EstadoController();
exports.default = estadoController;
