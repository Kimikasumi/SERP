import { Router } from 'express';
import SolicitudPController from '../controllers/SolicitudPController';
class solicitudPRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', SolicitudPController.list2);
        this.router.get('/:cod_solicitud_presupuesto', SolicitudPController.getOne);
        this.router.post('/', SolicitudPController.create);
        this.router.delete('/:cod_solicitud_presupuesto', SolicitudPController.delete);
        this.router.put('/:cod_solicitud_presupuesto', SolicitudPController.update)
    }
}

const solicitudpRoutes = new solicitudPRoutes();
export default solicitudpRoutes.router;