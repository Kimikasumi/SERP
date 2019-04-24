import {Request, Response} from 'express';
import db from '../database';
class AreaController{
    public async list(req: Request,res: Response){
        const area = await db.query('SELECT * FROM area');
        res.json(area);
    }
    public async getOne(req: Request,res: Response): Promise<any> {
        const { id } = req.params;
        const p = await db.query('SELECT * FROM area WHERE id = ?',[id]);
        if (p.length >0){
            return res.json(p[0]);
        }
        res.status(404).json({text: 'El area no existe'});
    }
    public async create(req: Request,res: Response): Promise<void>{
        await db.query('INSERT INTO area set ?', [req.body]);
        res.json({message: 'area Creada'});
    }
    public async delete(req: Request,res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM area WHERE id = ?',[id]);
        res.json({message: 'El area fue eliminado'});
    }
    public async update(req: Request,res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('UPDATE FROM area WHERE id = ?',[id]);
        res.json({message: 'El area fue modificado'});
    
    }
    }
    const areaController =new AreaController();
    export default areaController;