import { Request, response, Response } from "express";
export default class VentureController {
    public create(req: Request, res: Response) {
        return res.status(201).json({ status: 'OK' });
    }

    public update(req: Request, res: Response) {
        return res.status(200).json({ status: 'OK' });
    }

    public get(req: Request, res: Response) {
        return res.status(200).json({ status: 'OK', data: {} });
    }

    public getAll(req: Request, res: Response) {
        return res.status(200).json({ status: 'OK', data: [] });
    }
}