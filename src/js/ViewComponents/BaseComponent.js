import Store from '../ReactivityManager/Store.js';

export default class BaseComponent {
    constructor(props) {
        this.render = this.render || function noop() {};

        if (props.store instanceof Store) {
            props.store.events.subscribe($eventKey.STATE_CHANGE, () => this.render());
        }

        if (props.hasOwnProperty('element')) {
            this.element = props.element;
        }

        if (props.hasOwnProperty('elements')) {
            this.elements = props.elements;
        }
    }
}