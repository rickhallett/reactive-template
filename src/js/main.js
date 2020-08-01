import { $i, $q, $a } from './lib/constants.js';
import actions from './ReactivityManager/actions.js';
import mutations from './ReactivityManager/mutations.js';
import EventManager from './ReactivityManager/EventManager.js'
import Store from './ReactivityManager/Store.js';

import BaseComponent from './ViewComponents/BaseComponent.js';
import ExampleComponent from './ViewComponents/ExampleComponent.js';

import App from './App.js'

const app = new App({
    store: new Store({
        actions,
        mutations,
        events: new EventManager()
    }),
    components: []
});

app.registerComponent(new ExampleComponent(app.store));
app.registerComponent(new ExampleComponent(app.store));
app.registerComponent(new ExampleComponent(app.store));

console.log(app);