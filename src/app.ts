import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoConnector from './repositories/db/connector';
import routes from './routes';

class App {
    public app: Application;
    constructor() {
        this.app = express();
        dotenv.config();
        this.config();
        routes.load(this.app);
        this.connectMongoDB();
    }

    private config(): void {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(bodyParser.json({ limit: '10mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    }

    private connectMongoDB(): void {
        let mongoUrl: any = process.env.MONGO_URL;
        console.log(mongoUrl);
        mongoConnector.connect(mongoUrl);
    }
}
export default new App().app;