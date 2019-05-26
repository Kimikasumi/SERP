import {Request, Response} from 'express';
import db from '../database';
class PresupuestoController{

public async list (req: Request,res: Response): Promise<void>{
    const presupuestos = await db.query('SELECT sp.cod_solicitud_presupuesto, sp.desc_solicitud_presupuesto, rp.nom_repeticion_semanal, sp.valor_presupuesto, sp.area_solicitante, es.nom_estado_solicitud, cuenta.nom_cuenta FROM solicitud_presupuesto sp, repeticion_semanal rp, estado_solicitud es, cuenta WHERE sp.cod_cuenta = cuenta.cod_cuenta and sp.cod_repeticion_semanal = rp.cod_repeticion_semanal and es.cod_estado_solicitud = sp.cod_estado');
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
    const id = Number(req.params.id);
    const cod = Number(req.body.cod_estado)
    await db.query('UPDATE solicitud_presupuesto SET COD_ESTADO=? WHERE cod_solicitud_presupuesto = ?',[cod,id]);
    res.json({message: 'La solicitud_presupuesto fue modificado'});

}

public async getSolicitudes (req: Request,res: Response): Promise<any>{
    const p = await db.query('SELECT es.nom_estado_solicitud as Estado, count(sp.cod_estado) as Cantidad FROM solicitud_presupuesto sp, estado_solicitud es WHERE sp.cod_estado = es.cod_estado_solicitud GROUP BY es.nom_estado_solicitud');
    if (p.length >0){
        return res.json(p);
    }
    res.status(404).json({text: 'No hay solicitudes en el sistema'});
};

public async getPresupuestoAreas (req: Request,res: Response): Promise<any>{
    const p = await db.query('SELECT nom_cuenta as Cuenta, saldo as Presupuesto FROM CUENTA');
    if (p.length >0){
        return res.json(p);
    }
    res.status(404).json({text: 'No hay solicitudes en el sistema'});
};

public async getPresupuestoTotal (req: Request,res: Response): Promise<any>{
    const p = await db.query('SELECT sum(saldo) as Presupuesto FROM CUENTA');
    if (p.length >0){
        return res.json(p);
    }
    res.status(404).json({text: 'No hay solicitudes en el sistema'});
};

public async getEstados (req: Request, res: Response): Promise<void>{
    const estados = await db.query('SELECT * FROM estado_solicitud');
    res.json(estados);
};

public async getRepeticion (req: Request, res: Response): Promise<void> {
    const repeticion = await db.query('SELECT * FROM repeticion_semanal');
    res.json(repeticion);
}

public async getCuenta (req: Request, res: Response): Promise<void> {
    const cuenta = await db.query('SELECT * FROM cuenta');
    res.json(cuenta);
}
}
const presupuestoController = new PresupuestoController();
export default presupuestoController;