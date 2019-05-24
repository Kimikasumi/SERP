import { Router } from 'express';

import retailersControllers from '../controllers/retailersControllers';

class RetailersRoutes {

    public router: Router = Router();   

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', retailersControllers.list);
        this.router.get('/:cod_sucursal', retailersControllers.getOne);
        this.router.get('/product/:cod_producto', retailersControllers.getPerProduct);
        this.router.post('/', retailersControllers.create);
        this.router.delete('/:cod_sucursal', retailersControllers.delete);
        this.router.put('/:cod_sucursal', retailersControllers.update);
        this.router.post('/solicitar',retailersControllers.solicitar);
    }
}

const retailersRoutes = new RetailersRoutes();
export default retailersRoutes.router;