import { Request, Response } from 'express';

import pool from '../database';
import { request } from 'https';

class RetailersController {

    public async list(req: Request, res: Response) {
        const retailers = await pool.query('SELECT * FROM RETAIL');
        res.json(retailers);
    };

    public async getOne(req: Request, res: Response): Promise<any> {
        const { cod_retail } = req.params;
        const retailer = await pool.query('SELECT * FROM RETAIL WHERE cod_retail = ?',
            [cod_retail]);
        if (retailer.length > 0) {
            return res.json(retailer[0]);
        }
        res.status(404).json({ text: 'sucursal no encontrada' });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO RETAIL set ?', [req.body]);
        console.log(req.body);
        res.json({ text: 'sucursal guardada' });
    }

    public async delete(req: Request, res: Response) {
        const { cod_retail } = req.params;
        await pool.query('DELETE FROM RETAIL WHERE cod_retail = ?',
            [cod_retail]);
        res.json({ message: 'La sucursal se elimino' });
    }

    public async update(req: Request, res: Response) {
        const { cod_retail } = req.params;
        await pool.query('UPDATE RETAIL set ? WHERE cod_retail = ?',
            [req.body,cod_retail]);
        res.json({ message: 'La sucursal se ha actualizado' })
    }
}

const retailersController = new RetailersController();
export default retailersController;