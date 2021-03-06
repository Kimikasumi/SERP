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
const database_1 = __importDefault(require("../../database"));
class WorkersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT * FROM FUNCIONARIO');
            res.json(consulta);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_funcionario } = req.params;
            const funcionario = yield database_1.default.query('SELECT * FROM FUNCIONARIO WHERE cod_funcionario=?', [cod_funcionario]);
            if (funcionario.length > 0) {
                return res.json(funcionario[0]);
            }
            return res.status(404).json({ text: 'No existe el funcionario' });
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO FUNCIONARIO SET ?', [req.body]);
            res.json({ message: 'Funcionario Guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_funcionario } = req.params;
            yield database_1.default.query('DELETE FROM FUNCIONARIO WHERE cod_funcionario= ?', [cod_funcionario]);
            res.json({ text: 'Borrando Funcionario ' + req.params.cod_funcionario });
        });
    }
    update(req, res) {
        const { cod_funcionario } = req.params;
        database_1.default.query('UPDATE FUNCIONARIO SET ? WHERE cod_funcionario = ?', [req.body, cod_funcionario]);
        res.json({ text: 'Actualizando Funcionario ' + req.params.cod_funcionario });
    }
}
const workersController = new WorkersController();
exports.default = workersController;
