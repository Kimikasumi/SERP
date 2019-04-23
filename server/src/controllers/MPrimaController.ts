import {Request, Response} from 'express';
import db from '../database';
class MPrimaController{

    public async list (req:Request,res: Response): Promise<void>{
        const consulta = await db.query('SELECT * FROM MATERIA_PRIMA');
        res.json(consulta);
    };

    public async getOne(req:Request,res: Response): Promise<any>{
        const {cod_m_prima} = req.params;
        console.log(req.params)
        const mPrima = await db.query('SELECT * FROM MATERIA_PRIMA WHERE cod_m_prima=?',[cod_m_prima]);
        if(mPrima.length > 0){
            return res.json(mPrima[0]);
        }
        return res.status(404).json({text: 'No existe la materia prima'});
    };

    public async create(req:Request,res: Response){
        console.log(req.body)
        await db.query('INSERT INTO MATERIA_PRIMA SET ?', [req.body]);
        res.json({message: 'Materia Prima Guardada'});
    }

    public async delete(req:Request,res: Response): Promise<void>{
        const {cod_m_prima} = req.params;
        await db.query('DELETE FROM MATERIA_PRIMA WHERE cod_m_prima= ?', [cod_m_prima]);
        res.json({text: 'Borrando cod_m_prima '+ req.params.cod_m_prima});
    }
    
    public update(req:Request,res: Response){
        const {cod_m_prima} = req.params;
        
        db.query('UPDATE MATERIA_PRIMA SET ? WHERE cod_m_prima = ?',[req.body, cod_m_prima]);
        res.json({text: 'Actualizando Materia Prima '+ req.params.cod_m_prima});
    }
}

const mPrimacontroller = new  MPrimaController();
export default mPrimacontroller;