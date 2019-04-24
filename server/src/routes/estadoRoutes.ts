import { Router } from 'express';


import estadoController from '../controllers/estadoController';

class EstadoRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', estadoController.list);
        this.router.get('/:id', estadoController.getOne);
        this.router.post('/', estadoController.create);
        this.router.put('/:id', estadoController.update);
        this.router.delete('/:id', estadoController.delete);
    }
}
const estadoRoutes = new EstadoRoutes();
export default estadoRoutes.router;