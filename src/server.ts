import { App } from './app';
import { ExempleController } from './controllers/exemple/exemple.controller';
import { Logger } from './utils/logger';

export class Main {
  private logger: Logger = new Logger(this);

  constructor(routes: any[]) {
    this.start(routes);
  }

  private async start(routes: any[]) {
    this.logger.info('Start the server');
    new App(routes).listen();
  }
}

new Main([
  new ExempleController(),
]);