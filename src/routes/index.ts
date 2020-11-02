import { Application, Request, Response } from 'express';
import VentureRoutes from './ventures';

let load = (app: Application) => {
    new VentureRoutes().route(app);

    app.get('/api', (req: Request, res: Response) => {
        return res.status(200).json({ message: 'Welcome to venture apis' });
    });
    app.get('*', function (req, res) {
        return res.status(404).send("Sorry, the requested api is not found");
    });
}

export default { load };
