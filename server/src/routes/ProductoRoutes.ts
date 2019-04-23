import { Router } from 'express';
import ProduccionController from '../controllers/ProductoController';
class ProduccionRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ProduccionController.list);
        this.router.get('/:cod_producto', ProduccionController.getOne);
        this.router.post('/', ProduccionController.create);
        this.router.delete('/:cod_producto', ProduccionController.delete);
        this.router.put('/:cod_producto', ProduccionController.update)
    }
}

const produccionRoutes = new ProduccionRoutes();
export default produccionRoutes.router;