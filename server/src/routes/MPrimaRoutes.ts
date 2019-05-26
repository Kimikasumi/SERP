import { Router } from 'express';
import MPrimaController from '../controllers/MPrimaController';
class MPrimaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', MPrimaController.list);
        this.router.get('/mpAnio', MPrimaController.mpAnio);
        this.router.get('/:cod_m_prima', MPrimaController.getOne);
        this.router.post('/', MPrimaController.create);
        this.router.delete('/:cod_m_prima', MPrimaController.delete);
        this.router.put('/:cod_m_prima', MPrimaController.update)
    }
}

const mPrimaRoutes = new MPrimaRoutes();
export default mPrimaRoutes.router;