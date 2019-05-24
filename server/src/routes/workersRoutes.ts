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
        this.router.get('/getFporModulos/:cod_modulo', workersController.getFporModulos);
        this.router.get('/getTotalF', workersController.getTotalF);
        this.router.get('/getAusencias', workersController.getAusencias);
        this.router.get('/getEficacia', workersController.getEficacia);
        this.router.get('/filtroModulos/:nom_modulo', workersController.filtroModulos);
    }
}

const workersRoutes = new WorkersRoutes();
export default workersRoutes.router;