import { Router } from 'express';


import areaController from '../controllers/areaController';

class AreaRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', areaController.list);
        this.router.get('/:id', areaController.getOne);
        this.router.post('/', areaController.create);
        this.router.put('/:id', areaController.update);
        this.router.delete('/:id', areaController.delete);
    }
}
const areaRoutes = new AreaRoutes();
export default areaRoutes.router;