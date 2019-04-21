import {Request, Response} from 'express';
import db from '../database';
class WorkersController{

    public async list (req:Request,res: Response): Promise<void>{
        const consulta = await db.query('SELECT * FROM FUNCIONARIO');
        res.json(consulta);
    };

    public async getOne(req:Request,res: Response): Promise<any>{
        const {cod_funcionario} = req.params;
        const funcionario = await db.query('SELECT * FROM FUNCIONARIO WHERE cod_funcionario=?',[cod_funcionario]);
        if(funcionario. length > 0){
            return res.json(funcionario[0]);
        }
        return res.status(404).json({text: 'No existe el funcionario'});
    };

    public async create(req:Request,res: Response): Promise<void>{
        console.log(req.body)
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        await db.query('INSERT INTO FUNCIONARIO SET ?', [req.body]);
        res.json({message: 'Funcionario Guardado'});
    }

    public async delete(req:Request,res: Response): Promise<void>{
        const {cod_funcionario} = req.params;
        await db.query('DELETE FROM FUNCIONARIO WHERE cod_funcionario= ?', [cod_funcionario]);
        res.json({text: 'Borrando Funcionario '+ req.params.cod_funcionario});
    }
    
    public update(req:Request,res: Response){
        const {cod_funcionario} = req.params;
        db.query('UPDATE FUNCIONARIO SET ? WHERE cod_funcionario = ?',[req.body, cod_funcionario]);
        res.json({text: 'Actualizando Funcionario '+ req.params.cod_funcionario});
    }
}

const workersController = new  WorkersController();
export default workersController;