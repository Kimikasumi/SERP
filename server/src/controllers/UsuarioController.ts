import {Request, Response} from 'express';
import db from '../database';

class UsuarioController {
    public async login(req:Request,res: Response): Promise<any>{
        const {cedula,contrasenia} = req.params;
        const user = await db.query('SELECT * FROM USUARIO WHERE cedula=? AND contrasenia=?',[cedula,contrasenia]);
        if(user.length > 0){
            return res.json(user[0]);
        }
        return res.status(404).json({text: 'No existe el usuario'});
    };
}

const usuarioController = new  UsuarioController();
export default usuarioController;