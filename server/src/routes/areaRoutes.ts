import { Router } from 'express';


import areaController from '../controllers/areaController';

class AreaRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/listadoA', areaController.list);
        this.router.get('/ListadoOneA:id', areaController.getOne);
        this.router.post('/createA', areaController.create);
        this.router.put('/updateA:id', areaController.update);
        this.router.delete('/deleteA:id', areaController.delete);
    }
}
const areaRoutes = new AreaRoutes();
export default areaRoutes.router;