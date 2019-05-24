import { Router } from 'express';
import solicitudInventarioControllers from '../controllers/solicitudInventarioControllers';
class solicitudInventarioPRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', solicitudInventarioControllers.list);
        this.router.get('/list', solicitudInventarioControllers.list2);
        this.router.get('/:cod_solicitud', solicitudInventarioControllers.getOne);
        this.router.post('/', solicitudInventarioControllers.create);
        this.router.delete('/:cod_solicitud', solicitudInventarioControllers.delete);
        this.router.put('/:cod_solicitud', solicitudInventarioControllers.update)
    }
}

const solicitudIRoutes = new solicitudInventarioPRoutes();
export default solicitudIRoutes.router;
