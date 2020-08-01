export default class Store {
    constructor({ actions, mutations, state, events }) {
        const self = this;

        self.actions = actions;
        self.mutations = mutations;
        self.events = events;

        self.previousStateCache = {};

        self.state = new Proxy((state || {}), {
            set: function(state, key, value) {

                state[key] = value;
                self.previousStateCache[key] = value;

                console.log(`${$eventKey.STATE_CHANGE}: ${key}:`, value);
                
                self.events.publish($eventKey.STATE_CHANGE);

                return true;
            }
        });
    }

    dispatch(actionKey, payload) {
        if (typeof(this.actions[actionKey]) !== 'function') {
            console.warn(`${actionKey} is not a registered action`);
            return false;
        }

        console.groupCollapsed(`ACTION: ${actionKey} ${Date.now()}`);

        this.actions[actionKey](this, payload);

        console.groupEnd();

        return true;
    }

    commit(mutationKey, payload) {
        if(typeof(this.mutations[mutationKey]) !== 'function') {
            console.warn(`${this.mutations[mutationKey]} is not a registered mutation`);
            return false;
        }

        console.groupCollapsed(`MUTATION: ${mutationKey} ${Date.now()}`);

        const newState = this.mutations[mutationKey](this.state, payload);

        this.state = Object.assign(this.state, newState);

        console.groupEnd();

        return true;
    }
}