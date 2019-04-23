import {Request, Response} from 'express';
import db from '../database';
class ProduccionController{

    public async list (req:Request,res: Response): Promise<void>{
        const consulta = await db.query('SELECT * FROM PRODUCTO');
        res.json(consulta);
    };

    public async getOne(req:Request,res: Response): Promise<any>{
        const {cod_producto} = req.params;
        console.log(req.params)
        const producto = await db.query('SELECT * FROM PRODUCTO WHERE cod_producto=?',[cod_producto]);
        if(producto.length > 0){
            return res.json(producto[0]);
        }
        return res.status(404).json({text: 'No existe el producto'});
    };

    public async create(req:Request,res: Response){
        console.log(req.body)
        await db.query('INSERT INTO PRODUCTO SET ?', [req.body]);
        res.json({message: 'Producto Guardado'});
    }

    public async delete(req:Request,res: Response): Promise<void>{
        const {cod_producto} = req.params;
        await db.query('DELETE FROM PRODUCTO WHERE cod_producto= ?', [cod_producto]);
        res.json({text: 'Borrando Producto '+ req.params.cod_producto});
    }
    
    public update(req:Request,res: Response){
        const {cod_producto} = req.params;
        
        db.query('UPDATE PRODUCTO SET ? WHERE cod_producto = ?',[req.body, cod_producto]);
        res.json({text: 'Actualizando Producto '+ req.params.cod_producto});
    }
}

const produccioncontroller = new  ProduccionController();
export default produccioncontroller;