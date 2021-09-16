import express from 'express';
import * as bodyParser from 'body-parser';
import { Logger } from './utils/logger';
import { environment } from './environment';

export class App {
    private app: express.Application;
    private port: number;

    private logger: Logger;

    constructor(controllers: any) {
        this.logger = new Logger(this);
        this.app = express();
        this.port = environment.server.port || 5000;

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
