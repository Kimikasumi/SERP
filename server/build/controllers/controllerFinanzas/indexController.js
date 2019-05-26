"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API Is /presupuesto' });
    }
    ;
}
exports.indexController = new IndexController();
