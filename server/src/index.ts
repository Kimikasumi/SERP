import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors'
import indexRoutes from './routes/indexRoutes';
import workersRoutes from './routes/workersRoutes';
import solicitudInventarioRoutes from './routes/solicitudInventarioRoutes'
import ProduccionRoutes from './routes/ProductoRoutes';

import MPrimaRoutes from './routes/MPrimaRoutes';

import retailersRoutes from './routes/retailersRoutes';
import solicitudPRoutes from './routes/solicitudPRoutes';
import presupuestoRoutes from './routes/presupuestoRoutes'
import cuentaRoutes from './routes/cuentaRoutes'

import usuarioRoutes from './routes/UsuarioRoutes'

class Server {

    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/Produccion',ProduccionRoutes);
        this.app.use('/MPrima',MPrimaRoutes);
        this.app.use('/workers',workersRoutes);
        this.app.use('/retail',retailersRoutes);
        this.app.use('/SolicitudP',solicitudPRoutes);
        this.app.use('/SolicitudInventario', solicitudInventarioRoutes);
        this.app.use('/Usuario',usuarioRoutes);
        this.app.use('/presupuesto', presupuestoRoutes)
        this.app.use('/cuenta',cuentaRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();