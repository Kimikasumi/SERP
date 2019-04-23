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
        this.router.get('/getOne/:cod_funcionario', workersController.getOne);
        this.router.post('/', workersController.create);
        this.router.delete('/delete/:cod_funcionario', workersController.delete);
        this.router.put('/update/:cod_funcionario', workersController.update);
        this.router.get('/getCargos', workersController.getCargos);
        this.router.get('/getModulos', workersController.getModulos);
    }
}

const workersRoutes = new WorkersRoutes();
export default workersRoutes.router;