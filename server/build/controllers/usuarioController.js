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
class UsuarioController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, contrasenia } = req.params;
            const user = yield database_1.default.query('SELECT * FROM USUARIO WHERE cedula=? AND contrasenia=?', [cedula, contrasenia]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            return res.status(404).json({ text: 'No existe el usuario' });
        });
    }
    ;
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
