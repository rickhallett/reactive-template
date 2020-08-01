import EventManager from './EventManager.js';

export default class ReactivityManager {
    constructor({ actions, mutations, store, events }) {
        this.actions = actions;
        this.mutations = mutations, 
        this.store = store;
        this.events = new EventManager();
    }
}