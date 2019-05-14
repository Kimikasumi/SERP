import { Router } from 'express';
import workersController from '../controllers/workersController';
class WorkersRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/listado', workersController.list);
        this.router.get('/all', workersController.listAll);
        this.router.get('/getOne/:cedula', workersController.getOne);
        this.router.post('/', workersController.create);
        this.router.delete('/delete/:cedula', workersController.delete);
        this.router.put('/update/:cedula', workersController.update);
        this.router.get('/getCargos', workersController.getCargos);
        this.router.get('/getModulos', workersController.getModulos);
        this.router.get('/getSucursales', workersController.getSucursales);
    }
}

const workersRoutes = new WorkersRoutes();
export default workersRoutes.router;