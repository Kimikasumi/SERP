import { Router } from 'express';
import workersController from '../controllers/workersController';
class WorkersRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', workersController.list);
        this.router.get('/:cod_funcionario', workersController.getOne);
        this.router.post('/', workersController.create);
        this.router.delete('/:cod_funcionario', workersController.delete);
        this.router.put('/:cod_funcionario', workersController.update)
    }
}

const workersRoutes = new WorkersRoutes();
export default workersRoutes.router;