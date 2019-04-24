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
class RetailersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retailers = yield database_1.default.query('SELECT * FROM RETAIL');
            res.json(retailers);
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_retail } = req.params;
            const retailer = yield database_1.default.query('SELECT * FROM RETAIL WHERE cod_retail = ?', [cod_retail]);
            if (retailer.length > 0) {
                return res.json(retailer[0]);
            }
            res.status(404).json({ text: 'sucursal no encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO RETAIL set ?', [req.body]);
            console.log(req.body);
            res.json({ text: 'sucursal guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_retail } = req.params;
            yield database_1.default.query('DELETE FROM RETAIL WHERE cod_retail = ?', [cod_retail]);
            res.json({ message: 'La sucursal se elimino' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cod_retail } = req.params;
            yield database_1.default.query('UPDATE RETAIL set ? WHERE cod_retail = ?', [req.body, cod_retail]);
            res.json({ message: 'La sucursal se ha actualizado' });
        });
    }
}
const retailersController = new RetailersController();
exports.default = retailersController;
