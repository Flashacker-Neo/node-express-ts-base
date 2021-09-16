import { App } from './app';
import { ExempleController } from './controllers/exemple/exemple.controller';
import { Logger } from './utils/logger';

export class Main {
  private logger: Logger = new Logger(this);

  constructor(port: number, routes: any[]) {
    this.start(port, routes);
  }

  private async start(port: number, routes: any[]) {
    this.logger.info('Start the server');
    
    new App(routes, port).listen();
  }
}

const routes: any[] = [
  new ExempleController(),
];
new Main(4000, routes);