import {Request, Response} from 'express';
import db from '../database';
class SolicitudPController{

    public async list (req:Request,res: Response): Promise<void>{
        const consulta = await db.query('SELECT * FROM SOLICITUD_PRESUPUESTO');
        res.json(consulta);
    };

    public async list2 (req:Request,res: Response): Promise<void>{
        const consulta = await db.query('SELECT cod_solicitud_presupuesto, nom_repeticion_semanal, desc_solicitud_presupuesto,'+
        'valor_presupuesto, area_solicitante, nom_estado_solicitud FROM solicitud_presupuesto, '+
        'repeticion_semanal, estado_solicitud WHERE repeticion_semanal.cod_repeticion_semanal = '+
        ' solicitud_presupuesto.cod_repeticion_semanal AND  '+
        'solicitud_presupuesto.cod_estado = estado_solicitud.cod_estado_solicitud '+
        'GROUP by cod_solicitud_presupuesto, nom_repeticion_semanal, desc_solicitud_presupuesto, '+
        'valor_presupuesto, area_solicitante, nom_estado_solicitud');
        res.json(consulta);
    };

    public async getOne(req:Request,res: Response): Promise<any>{
        const {cod_solicitud_presupuesto} = req.params;
        console.log(req.params)
        const solicitudP = await db.query('SELECT * FROM SOLICITUD_PRESUPUESTO WHERE cod_solicitud_presupuesto=?',[cod_solicitud_presupuesto]);
        if(solicitudP.length > 0){
            return res.json(solicitudP[0]);
        }
        return res.status(404).json({text: 'No existe la solicitud'});
    };

    public async create(req:Request,res: Response){
        console.log(req.body)
        await db.query('INSERT INTO SOLICITUD_PRESUPUESTO SET ?', [req.body]);
        res.json({message: 'Solicitud Guardada'});
    }

    public async delete(req:Request,res: Response): Promise<void>{
        const {cod_solicitud_presupuesto} = req.params;
        await db.query('DELETE FROM SOLICITUD_PRESUPUESTO WHERE cod_solicitud_presupuesto= ?', [cod_solicitud_presupuesto]);
        res.json({text: 'Borrando Solicitud '+ req.params.cod_solicitud_presupuesto});
    }
    
    public update(req:Request,res: Response){
        const {cod_solicitud_presupuesto} = req.params;
        
        db.query('UPDATE SOLICITUD_PRESUPUESTO SET ? WHERE cod_solicitud_presupuesto = ?',[req.body, cod_solicitud_presupuesto]);
        res.json({text: 'Actualizando solicitud '+ req.params.cod_solicitud_presupuesto});
    }
}

const solicitudPController = new  SolicitudPController();
export default solicitudPController;