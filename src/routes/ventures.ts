
import { Application, Request, Response } from 'express';
import VentureController from '../controllers/venture';

export default class VentureRoutes {

    private ventureController: VentureController = new VentureController();

    public route(app: Application) {

        app.post('/api/venture', (req: Request, res: Response) => {
            return this.ventureController.create(req, res);
        });

        app.get('/api/venture', (req: Request, res: Response) => {
            return this.ventureController.getAll(req, res);
        });

        app.get('/api/venture/:id', (req: Request, res: Response) => {
            return this.ventureController.get(req, res);
        });

        app.put('/api/venture/:id', (req: Request, res: Response) => {
            return this.ventureController.update(req, res);
        });
    }
}