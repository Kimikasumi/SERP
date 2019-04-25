import {Request, Response} from 'express';

class IndexController{

    public index (req:Request,res: Response){
        res.json({text: 'API Is /workers'});
        res.json({text: 'API is /retail'})
    };
    
}

export const indexController = new  IndexController();