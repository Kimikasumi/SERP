import {Request, Response} from 'express';
import db from '../database';

class CuentaController{

    public async getNomina (req:Request,res: Response): Promise<void>{
        const x = 'SELECT SUM(cargo.salario) nomina FROM funcionario,cargo WHERE funcionario.cod_cargo=cargo.cod_cargo'
         const consulta = await db.query(x);
        res.json(consulta);
    };

    public async getLiquidacion(req:Request,res: Response): Promise<any>{
        const {cedula} = req.params;
        const funcionario = await db.query('SELECT cargo.salario as salario FROM funcionario,cargo WHERE funcionario.cod_cargo=cargo.cod_cargo AND cedula=?',[cedula]);
        if(funcionario. length > 0){
            return res.json(funcionario[0]);
        }
        return res.status(404).json({text: 'No existe el funcionario'});
    };
    public async getSaldoCuenta(req:Request,res: Response): Promise<any>{
        const {cod_modulo} = req.params;
        const saldo = await db.query('SELECT saldo as saldo FROM cuenta WHERE  cod_modulo=?',[cod_modulo]);
        if(saldo. length > 0){
            return res.json(saldo[0]);
        }
        return res.status(404).json({text: 'No existe el funcionario'});
    };

    public update(req:Request,res: Response){
        const {cod_cuenta,saldo} = req.params;
        db.query('UPDATE cuenta SET saldo = ? WHERE cod_cuenta = ?',[saldo, cod_cuenta]);
        res.json({text: 'Actualizando solicitud '+ req.params.cod_cuenta});
    }

}

const cuentaController = new  CuentaController();
export default cuentaController;