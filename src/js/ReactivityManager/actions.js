import utils from '../lib/Utils.js';

const log = utils.log;

export default {
    init: function(context, payload) {
        log('App initialising', 'lightblue');
        // execute stuff
        // commit stuff
        context.commit('mutationKey', null);
    }
}