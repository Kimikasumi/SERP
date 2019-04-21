import { Router } from 'express';
import ProduccionController from '../controllers/ProduccionController';
class ProduccionRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ProduccionController.list);
        this.router.get('/:cod_funcionario', ProduccionController.getOne);
        this.router.post('/', ProduccionController.create);
        this.router.delete('/:cod_funcionario', ProduccionController.delete);
        this.router.put('/:cod_funcionario', ProduccionController.update)
    }
}

const produccionRoutes = new ProduccionRoutes();
export default produccionRoutes.router;