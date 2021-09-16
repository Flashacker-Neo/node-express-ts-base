import express from 'express';
import * as bodyParser from 'body-parser';
import { Logger } from './utils/logger';

export class App {
    private app: express.Application;
    private port: number;

    private logger: Logger;

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
            this.logger.info(`Server listening on port ${this.port}`);
        });
    }
}
