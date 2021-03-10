import express from 'express';
import * as bodyParser from 'body-parser';
import { Color } from './utils/colorConsole';
import { Logger } from './utils/logger';

export class App {
    public app: express.Application;
    public port: number;

    public logger: Logger;

    constructor(controllers: any, port: number) {
        this.logger = new Logger(this);
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
            this.logger.info(`Server listening on the port ${this.port}`);
        });
    }
}
