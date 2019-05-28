import { Request, Response } from 'express';

import pool from '../database';
import { request } from 'https';

class RetailersController {

    public async list(req: Request, res: Response) {
        const retailers = await pool.query('SELECT SUCURSAL.nom_sucursal, CIUDAD.nom_ciudad, SUCURSAL.direc FROM sucursal, ciudad WHERE ciudad.cod_ciudad = sucursal.cod_ciudad');
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
        const retailers = await pool.query('SELECT nom_sucursal, cod_ciudad, direc, INVENTARIO.cantidad FROM INVENTARIO, SUCURSAL, PRODUCTO where PRODUCTO.cod_producto = INVENTARIO.cod_producto and INVENTARIO.cod_sucursal = SUCURSAL.cod_sucursal and PRODUCTO.cod_producto = ? GROUP BY SUCURSAL.nom_sucursal',
            [cod_producto]);
        if (retailers.length > 0) {
            return res.json(retailers);
        }
        res.status(404).json({ text: 'No hay este producto en la sucursal' });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO sucursal set ?', [req.body]);
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
        res.json({ text: 'Solicitud enviada' });
    }

    public async getCantidadProductoSucursal (req: Request,res: Response): Promise<any>{
        const p = await pool.query('SELECT sucursal.nom_sucursal as Nombre, sum(inventario.cantidad) as Cantidad FROM sucursal, inventario WHERE sucursal.cod_sucursal = inventario.cod_sucursal GROUP BY nom_sucursal');
        if (p.length >0){
            return res.json(p);
        }
        res.status(404).json({text: 'Hubo un error en las sucursales'});
    };

    public async getValorInventarioSucursal (req: Request,res: Response): Promise<any>{
        const p = await pool.query('SELECT sucursal.nom_sucursal as Nombre,  sum(inventario.cantidad * producto.precio_unitario) as Valor FROM sucursal, inventario, producto WHERE sucursal.cod_sucursal = inventario.cod_sucursal and inventario.cod_producto = producto.cod_producto GROUP BY sucursal.nom_sucursal');
        if (p.length >0){
            return res.json(p);
        }
        res.status(404).json({text: 'Hubo un error en las sucursales'});
    };

    public async getValorInventarioCiudad (req: Request,res: Response): Promise<any>{
        const p = await pool.query('SELECT ciudad.nom_ciudad as Ciudad,  sum(inventario.cantidad * producto.precio_unitario) as Valor FROM ciudad, sucursal, inventario, producto WHERE ciudad.cod_ciudad = sucursal.cod_ciudad and sucursal.cod_sucursal = inventario.cod_sucursal and inventario.cod_producto = producto.cod_producto GROUP BY ciudad.nom_ciudad');
        if (p.length >0){
            return res.json(p);
        }
        res.status(404).json({text: 'Hubo un error en las sucursales'});
    };

    public async getCiudades(req: Request, res: Response): Promise<void> {
        const p = await pool.query('SELECT * FROM CIUDAD');
        res.json(p);
    }
    
    public async getSucursales(req: Request, res: Response): Promise<void> {
        const p = await pool.query('SELECT SUCURSAL.cod_sucursal, SUCURSAL.nom_sucursal FROM SUCURSAL');
        res.json(p);
    }

    public async getProducto(req: Request, res: Response): Promise<void> {
        const p = await pool.query('SELECT PRODUCTO.cod_producto, PRODUCTO.nom_producto FROM PRODUCTO');
        res.json(p);
    }

}

const retailersController = new RetailersController();
export default retailersController;