import {Request, Response} from 'express';
import db from '../database';
class PresupuestoController{

public async list (req: Request,res: Response): Promise<void>{
    const presupuestos = await db.query('SELECT * FROM solicitud_presupuesto');
    res.json(presupuestos);
};
public async getOne (req: Request,res: Response): Promise<any>{
    const { id } = req.params;
    const p = await db.query('SELECT * FROM solicitud_presupuesto WHERE cod_solicitud_presupuesto = ?',[id]);
    if (p.length >0){
        return res.json(p[0]);
    }
    res.status(404).json({text: 'La solicitud de presupuesto no existe'});
};
public async create(req: Request,res: Response): Promise<void>{
    await db.query('INSERT INTO solicitud_presupuesto set ?', [req.body]);
    res.json({message: 'solicitud presupuesto Creado'});
}
public async delete(req: Request,res: Response): Promise<void>{
    const {id} = req.params;
    await db.query('DELETE FROM solicitud_presupuesto WHERE cod_solicitud_presupuesto = ?',[id]);
    res.json({message: 'La solicitud_presupuesto fue eliminado'});
};
public async update(req: Request,res: Response): Promise<void>{
    const {id} = req.params;
    await db.query('UPDATE solicitud_presupuesto SET ? WHERE cod_solicitud_presupuesto = ?',[req.body,id]);
    res.json({message: 'La solicitud_presupuesto fue modificado'});

}
}
const presupuestoController = new PresupuestoController();
export default presupuestoController;