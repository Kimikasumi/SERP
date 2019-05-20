import { Router } from 'express';
import UsuarioContoller from '../controllers/UsuarioController';

class UsuarioRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:cedula/:contrasenia', UsuarioContoller.login);
    }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;