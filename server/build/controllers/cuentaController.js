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
class CuentaController {
    getNomina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const x = 'SELECT SUM(cargo.salario) nomina FROM funcionario,cargo WHERE funcionario.cod_cargo=cargo.cod_cargo';
            const consulta = yield database_1.default.query(x);
            res.json(consulta);
        });
    }
    ;
    getLiquidacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            const funcionario = yield database_1.default.query('SELECT cargo.salario as salario FROM funcionario,cargo WHERE funcionario.cod_cargo=cargo.cod_cargo AND cedula=?', [cedula]);
            if (funcionario.length > 0) {
                return res.json(funcionario[0]);
            }
            return res.status(404).json({ text: 'No existe el funcionario' });
        });
    }
    ;
    getSaldoCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_modulo } = req.params;
            const saldo = yield database_1.default.query('SELECT saldo as saldo FROM cuenta WHERE  cod_modulo=?', [cod_modulo]);
            if (saldo.length > 0) {
                return res.json(saldo[0]);
            }
            return res.status(404).json({ text: 'No existe el funcionario' });
        });
    }
    ;
    update(req, res) {
        const { cod_cuenta, saldo } = req.params;
        database_1.default.query('UPDATE cuenta SET saldo = ? WHERE cod_cuenta = ?', [saldo, cod_cuenta]);
        res.json({ text: 'Actualizando solicitud ' + req.params.cod_cuenta });
    }
}
const cuentaController = new CuentaController();
exports.default = cuentaController;
