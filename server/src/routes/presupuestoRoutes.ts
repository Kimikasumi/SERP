import { Router } from 'express';


import presupuestoController from '../controllers/presupuestoController';

class PresupuestoRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/listadoP', presupuestoController.list);
        this.router.get('/listadoOneP/:id', presupuestoController.getOne);
        this.router.post('/createP', presupuestoController.create);
        this.router.put('/updateP/:id', presupuestoController.update);
        this.router.delete('/deleteP/:id', presupuestoController.delete);
        this.router.get('/getSolicitudes', presupuestoController.getSolicitudes)
        this.router.get('/getPresupuestoAreas', presupuestoController.getPresupuestoAreas)
        this.router.get('/getPresupuestoTotal', presupuestoController.getPresupuestoTotal)
        this.router.get('/getEstados',presupuestoController.getEstados)
        this.router.get('/getRepeticion',presupuestoController.getRepeticion)
        this.router.get('/getCuenta',presupuestoController.getCuenta)
    }
}
const presupuestoRoutes = new PresupuestoRoutes();
export default presupuestoRoutes.router;