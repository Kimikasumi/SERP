"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const workersRoutes_1 = __importDefault(require("./routes/workersRoutes"));
const presupuestoRoutes_1 = __importDefault(require("./routes/presupuestoRoutes"));
const ProductoRoutes_1 = __importDefault(require("./routes/ProductoRoutes"));
const MPrimaRoutes_1 = __importDefault(require("./routes/MPrimaRoutes"));
const retailersRoutes_1 = __importDefault(require("./routes/retailersRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/Produccion', ProductoRoutes_1.default);
        this.app.use('/MPrima', MPrimaRoutes_1.default);
        this.app.use('/workers', workersRoutes_1.default);
        this.app.use('/retail', retailersRoutes_1.default);
        this.app.use('/presupuesto', presupuestoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
