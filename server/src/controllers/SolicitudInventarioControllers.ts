import {Request, Response} from 'express';
import db from '../database';
class SolicitudInventarioControllers{

 

    public async list (req:Request,res: Response): Promise<void>{
        const consulta = await db.query('select cod_solicitud,nom_sucursal,nom_producto,solicitud_inv.cantidad,nom_estado_solicitud FROM solicitud_inv, estado_solicitud, sucursal, producto WHERE solicitud_inv.cod_estado=estado_solicitud.cod_estado_solicitud AND solicitud_inv.cod_sucursal=sucursal.cod_sucursal AND solicitud_inv.cod_producto=producto.cod_producto');
        res.json(consulta);
    };
    public async list2 (req:Request,res: Response): Promise<void>{
        const consulta = await db.query('select * from solicitud_inv');
        res.json(consulta);
    };

    public async getOne(req:Request,res: Response): Promise<any>{
        const {cod_solicitud} = req.params;
        console.log(req.params)
        const solicitudI = await db.query('SELECT * FROM SOLICITUD_INV WHERE cod_solicitud=?',[cod_solicitud]);
        if(solicitudI.length > 0){
            return res.json(solicitudI[0]);
        }
        return res.status(404).json({text: 'No existe la solicitud'});
    };

    public async create(req:Request,res: Response){
        console.log(req.body)
        await db.query('INSERT INTO SOLICITUD_INV SET ?', [req.body]);
        res.json({message: 'Solicitud Guardada'});
    }

    public async delete(req:Request,res: Response): Promise<void>{
        const {cod_solicitud} = req.params;
        await db.query('DELETE FROM SOLICITUD_INV WHERE cod_solicitud= ?', [cod_solicitud]);
        res.json({text: 'Borrando Solicitud '+ req.params.cod_solicitud});
    }
    
    public update(req:Request,res: Response){
        const {cod_solicitud} = req.params;
        
        db.query('UPDATE SOLICITUD_INV SET ? WHERE cod_solicitud = ?',[req.body, cod_solicitud]);
        res.json({text: 'Actualizando solicitud '+ req.params.cod_solicitud});
    }
}

const solicitudInventarioControllers = new  SolicitudInventarioControllers();
export default solicitudInventarioControllers;