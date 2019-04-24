"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API Is /workers' });
        res.json({ text: 'API is /api/retail' });
    }
    ;
}
exports.indexController = new IndexController();
