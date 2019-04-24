import { Router } from 'express';


import estadoController from '../controllers/estadoController';

class EstadoRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/listadoE', estadoController.list);
        this.router.get('/ListadoOneE:id', estadoController.getOne);
        this.router.post('/createE', estadoController.create);
        this.router.put('/updateE:id', estadoController.update);
        this.router.delete('/deleteE:id', estadoController.delete);
    }
}
const estadoRoutes = new EstadoRoutes();
export default estadoRoutes.router;