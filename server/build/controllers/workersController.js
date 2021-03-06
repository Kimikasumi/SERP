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
class WorkersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const x = 'SELECT cedula, nom_funcionario, nom_cargo,' +
                'nom_modulo, correo, nom_genero, foto, direccion, telefono FROM FUNCIONARIO,' +
                'CARGO, MODULO, GENERO WHERE FUNCIONARIO.cod_modulo = MODULO.cod_modulo ' +
                'AND FUNCIONARIO.cod_cargo = CARGO.cod_cargo AND FUNCIONARIO.cod_genero = GENERO.cod_genero';
            const consulta = yield database_1.default.query(x);
            console.log('list');
            res.json(consulta);
        });
    }
    ;
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const x = 'SELECT * FROM FUNCIONARIO';
            const consulta = yield database_1.default.query(x);
            res.json(consulta);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            const funcionario = yield database_1.default.query('SELECT * FROM FUNCIONARIO WHERE cedula=?', [cedula]);
            if (funcionario.length > 0) {
                return res.json(funcionario[0]);
            }
            return res.status(404).json({ text: 'No existe el funcionario' });
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO FUNCIONARIO SET ?', [req.body]);
            res.json({ message: 'Funcionario Guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula } = req.params;
            yield database_1.default.query('DELETE FROM FUNCIONARIO WHERE cedula= ?', [cedula]);
            res.json({ text: 'Borrando Funcionario ' + req.params.cedula });
        });
    }
    update(req, res) {
        const { cedula } = req.params;
        database_1.default.query('UPDATE FUNCIONARIO SET ? WHERE cedula = ?', [req.body, cedula]);
        res.json({ text: 'Actualizando Funcionario ' + req.params.cedula });
    }
    getCargos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT cod_cargo, nom_cargo FROM CARGO where cod_cargo<>1 AND cod_cargo<>2');
            res.json(consulta);
        });
    }
    getModulos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT * FROM MODULO');
            res.json(consulta);
        });
    }
    getSucursales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.default.query('SELECT * FROM SUCURSAL');
            res.json(consulta);
        });
    }
    getFporModulos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_modulo } = req.params;
            const cantidad = yield database_1.default.query('SELECT nom_modulo as modulo,count(nom_funcionario) as cantidad FROM FUNCIONARIO, MODULO WHERE MODULO.cod_modulo=? AND FUNCIONARIO.cod_modulo=?', [cod_modulo, cod_modulo]);
            if (cantidad.length > 0) {
                return res.json(cantidad);
            }
            return res.status(404).json({ text: 'No hay registros' });
        });
    }
    getTotalF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var consulta = yield database_1.default.query('SELECT count(nom_funcionario) as total FROM FUNCIONARIO');
            return res.json(consulta);
        });
    }
    getAusencias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var consulta = yield database_1.default.query('SELECT sum(ausencias) as sumatoria FROM FUNCIONARIO');
            return res.json(consulta);
        });
    }
    getEficacia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var consulta = yield database_1.default.query('SELECT sum(eficacia) as sumatoria FROM FUNCIONARIO');
            return res.json(consulta);
        });
    }
    filtroModulos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nom_modulo } = req.params;
            const x = 'SELECT cedula, nom_funcionario, nom_cargo,' +
                'nom_modulo, correo, nom_genero, foto FROM FUNCIONARIO,' +
                'CARGO, MODULO, GENERO WHERE FUNCIONARIO.cod_modulo = MODULO.cod_modulo ' +
                'AND FUNCIONARIO.cod_cargo = CARGO.cod_cargo AND FUNCIONARIO.cod_genero = GENERO.cod_genero AND MODULO.nom_modulo = ?';
            const consulta = yield database_1.default.query(x, [nom_modulo]);
            return res.json(consulta);
        });
    }
}
const workersController = new WorkersController();
exports.default = workersController;
