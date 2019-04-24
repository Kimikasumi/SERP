import { Router } from 'express';


import presupuestoController from '../controllers/presupuestoController';

class PresupuestoRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/listadoP, presupuestoController.list);
        this.router.get('/listadoOneP:id', presupuestoController.getOne);
        this.router.post('/createP:id', presupuestoController.create);
        this.router.put('/updateP:id', presupuestoController.update);
        this.router.delete('/deleteP:id', presupuestoController.delete);
    }
}
const presupuestoRoutes = new PresupuestoRoutes();
export default presupuestoRoutes.router;