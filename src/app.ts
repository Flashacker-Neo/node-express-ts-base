import express from 'express';
import * as bodyParser from 'body-parser';
import { Color } from './utils/colorConsole';

export class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log( Color.colorConsole('§c[APP]§reset ') + `server listening on the port ${this.port}`);
        });
    }
}
