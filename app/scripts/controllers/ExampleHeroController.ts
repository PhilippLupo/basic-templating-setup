import { Controller } from '../lib/Controller';
import { Trianglify } from '../shims/Trianglify';

export class ExampleHeroController extends Controller {

    static selector: string = '.example-hero';

    constructor(element: HTMLElement) {
        super(element);

        let pattern = Trianglify({
			height: 1920,
			width: 1080,
            cell_size: 80
        });
        
		this.$().style.backgroundImage=`url(${pattern.png()})`;
    }
}