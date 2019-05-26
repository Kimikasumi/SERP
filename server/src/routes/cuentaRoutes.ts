import { Router } from 'express';
import CuentaController from '../controllers/cuentaController';
class CuentaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/nomina', CuentaController.getNomina);
        this.router.get('/liquidacion/:cedula', CuentaController.getLiquidacion);
        this.router.get('/saldo/:cod_modulo',CuentaController.getSaldoCuenta);
        this.router.get('/update/:cod_cuenta/:saldo',CuentaController.update)
    }
}

const cuentaRoutes = new CuentaRoutes();
export default cuentaRoutes.router;