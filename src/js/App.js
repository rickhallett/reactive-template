export default class App {
    constructor({ store, components }) {
        this.store = store;
        this.components = components;
    }

    registerComponent(component) {
        this.components.push(component);
    }
}