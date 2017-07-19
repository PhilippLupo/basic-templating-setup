import { Controller } from '../lib/Controller';
import { Vimeo } from '../shims/Vimeo';

export class ExampleHeroController extends Controller {

    static selector: string = '.example-hero';

    constructor(element: HTMLElement) {
        super(element);
        
    }
}