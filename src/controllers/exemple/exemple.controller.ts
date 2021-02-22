import * as express from 'express';
import { Exemple } from './exemple.interface';

export class ExempleController {
    public path = '/exemples';
    public router = express.Router();

    private exemples: Exemple[] = [
        {
            content: 'Dolor sit amet',
            title: 'Lorem Ipsum',
        }
    ];

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllExemples);
        this.router.post(this.path, this.createAnExemple);
    }

    public getAllExemples = (request: express.Request, response: express.Response) => {
        response.send(this.exemples);
    }

    public createAnExemple = (request: express.Request, response: express.Response) => {
        const exemple: Exemple = request.body;
        this.exemples.push(exemple);
        response.send(exemple);
    }
}