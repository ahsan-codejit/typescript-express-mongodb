import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

class App {
    public app: Application;
    constructor() {
        this.app = express();
        dotenv.config();
        this.config();
    }
    private config(): void {
        this.app.use(helmet());
        this.app.use(cors());

        this.app.use(bodyParser.json({ limit: '10mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    }
}
export default new App().app;