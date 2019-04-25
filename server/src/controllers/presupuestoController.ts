import {Request, Response} from 'express';
import db from '../database';
class PresupuestoController{

public async list (req: Request,res: Response): Promise<void>{
    const presupuestos = await db.query('SELECT * FROM PRESUPUESTOS');
    res.json('HOla mundo');
};
public async getOne (req: Request,res: Response): Promise<any>{
    const { id } = req.params;
    const p = await db.query('SELECT * FROM PRESUPUESTOS WHERE cod_presupuesto = ?',[id]);
    if (p.length >0){
        return res.json(p[0]);
    }
    res.status(404).json({text: 'El presupuesto no existe'});
};
public async create(req: Request,res: Response): Promise<void>{
    await db.query('INSERT INTO presupuestos set ?', [req.body]);
    res.json({message: 'Presupuesto Creado'});
}
public async delete(req: Request,res: Response): Promise<void>{
    const {id} = req.params;
    await db.query('DELETE FROM PRESUPUESTOS WHERE cod_presupuesto = ?',[id]);
    res.json({message: 'El presupuesto fue eliminado'});
};
public async update(req: Request,res: Response){
    const {id} = req.params;
    await db.query('UPDATE FROM PRESUPUESTOS WHERE cod_presupuesto = ?',[id]);
    res.json({message: 'El presupuesto fue modificado'});

}
}
const presupuestoController = new PresupuestoController();
export default presupuestoController;