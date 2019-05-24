import { Request, Response } from 'express';

import pool from '../database';
import { request } from 'https';

class RetailersController {

    public async list(req: Request, res: Response) {
        const retailers = await pool.query('SELECT * FROM sucursal');
        res.json(retailers);
    };

    public async getOne(req: Request, res: Response): Promise<any> {
        const { cod_sucursal } = req.params;
        const retailer = await pool.query('SELECT * FROM sucursal WHERE cod_sucursal = ?',
            [cod_sucursal]);
        if (retailer.length > 0) {
            return res.json(retailer[0]);
        }
        res.status(404).json({ text: 'sucursal no encontrada' });
    }

    public async getPerProduct(req: Request, res: Response): Promise<any> {
        const { cod_producto } = req.params;
        const retailers = await pool.query('SELECT nom_sucursal, cod_ciudad, direc, cantidad FROM INVENTARIO, SUCURSAL, PRODUCTO where PRODUCTO.cod_producto = INVENTARIO.cod_producto and INVENTARIO.cod_sucursal = SUCURSAL.cod_sucursal and PRODUCTO.cod_producto = ?',
            [cod_producto]);
        if (retailers.length > 0) {
            return res.json(retailers);
        }
        res.status(404).json({ text: 'sucursal no encontrada' });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO sucursal set ?', [req.body]);
        console.log(req.body);
        res.json({ text: 'sucursal guardada' });
    }

    public async delete(req: Request, res: Response) {
        const { cod_sucursal } = req.params;
        await pool.query('DELETE FROM sucursal WHERE cod_sucursal = ?',
            [cod_sucursal]);
        res.json({ message: 'La sucursal se elimino' });
    }

    public async update(req: Request, res: Response) {
        const { cod_sucursal } = req.params;
        await pool.query('UPDATE sucursal set ? WHERE cod_sucursal = ?',
            [req.body,cod_sucursal]);
        res.json({ message: 'La sucursal se ha actualizado' })
    }

    public async solicitar(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO solicitud_inv set ?',[req.body]);
        console.log(req.body);
        res.json({ text: 'Solicitud enviada' });
    }
}

const retailersController = new RetailersController();
export default retailersController;