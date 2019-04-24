"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API Is /workers' });
        res.json({ text: 'API is /api/retail' });
        res.json({ text: 'API is /api/gestorPresupuesto' });
        res.json({ text: 'API is /api/area' });
        res.json({ text: 'API is /api/estado/' });
    }
    ;
}
exports.indexController = new IndexController();
