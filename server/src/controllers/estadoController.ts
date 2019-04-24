import {Request, Response} from 'express';
import db from '../database';
class EstadoController{

public async list (req: Request,res: Response){
    const estado = await db.query('SELECT * FROM estado_presupuesto');
    res.json(estado);
}
public async getOne (req: Request,res: Response): Promise<any>{
    const { id } = req.params;
    const p = await db.query('SELECT * FROM estado_presupuesto WHERE id = ?',[id]);
    if (p.length >0){
        return res.json(p[0]);
    }
    res.status(404).json({text: 'El estado no existe'});
}
public async create(req: Request,res: Response): Promise<void>{
    await db.query('INSERT INTO estado_presupuesto set ?', [req.body]);
    res.json({message: 'estado Creada'});
}
public async delete(req: Request,res: Response): Promise<void>{
    const {id} = req.params;
    await db.query('DELETE FROM estado_presupuesto WHERE id = ?',[id]);
    res.json({message: 'El estado fue eliminado'});
}
public async update(req: Request,res: Response): Promise<void>{
    const {id} = req.params;
    await db.query('UPDATE FROM estado_presupuesto WHERE id = ?',[id]);
    res.json({message: 'El estado fue modificado'});

}
}
const estadoController =new EstadoController();
export default estadoController;