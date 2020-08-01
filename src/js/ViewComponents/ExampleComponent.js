import BaseComponent from './BaseComponent.js';

export default class ExampleComponent extends BaseComponent {
    constructor(store) {
        super({
            store: store,
            elements: {
            } 
        });

        this.render();
    }

    render() {
        
    }
}