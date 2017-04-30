import { Controller } from '../lib/Controller';

export class AppController extends Controller {

    static selector: string = '.example';

    constructor(element: HTMLElement) {
        super(element);
        console.log(this.$());
    }
}