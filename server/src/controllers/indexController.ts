import {Request, Response} from 'express';

class IndexController{

    public index (req:Request,res: Response){
        res.json({text: 'API Is /workers'});
        res.json({text: 'API is /api/retail'})
        res.json({text: 'API is /api/gestorPresupuesto'})
        res.json({text: 'API is /api/area'})
        res.json({text: 'API is /api/estado/'})
    };
    
}

export const indexController = new  IndexController();