import { App } from './app';
import { ExempleController } from './controllers/exemple/exemple.controller';

const app = new App(
  [
    new ExempleController(),
  ],
  5000,
);

app.listen();