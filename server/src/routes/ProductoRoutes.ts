import { Router } from 'express';
import ProduccionController from '../controllers/ProductoController';
class ProduccionRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ProduccionController.list);
        this.router.get('/Promedio', ProduccionController.prom);
        this.router.get('/Plazos1', ProduccionController.plazos1);
        this.router.get('/Plazos2', ProduccionController.plazos2);
        this.router.get('/Mayor', ProduccionController.mayor);
        this.router.get('/:cod_producto', ProduccionController.getOne);
        this.router.post('/', ProduccionController.create);
        this.router.delete('/:cod_producto', ProduccionController.delete);
        this.router.put('/:cod_producto', ProduccionController.update)
    }
}

const produccionRoutes = new ProduccionRoutes();
export default produccionRoutes.router;