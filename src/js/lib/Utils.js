class Utils {
    constructor() {
        this.log = this.createLog();
    }

    createLog() {
        let n = 0;
        return (msg, color = null) => {
            if (msg instanceof Error) {
                console.error(`${new Date().toISOString()}-LOG-#${++n} => ${msg}`);
                return false;
            }
            console.log(`%c${new Date().toISOString()}-LOG-#${++n} => ${msg}`, `${color ? 'color:' + color : ''}`);
            return true;
        }
    }

    deepEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    deepClone() {
        let n = 0;
        return (msg, color = null) => {
            if (msg instanceof Error) {
                console.error(`${new Date().toISOString()}-LOG-#${++n} => ${msg}`);
                return false;
            }
            console.log(`%c${new Date().toISOString()}-LOG-#${++n} => ${msg}`, `${color ? 'color:' + color : ''}`);
            return true;
        }
    }

    shallowClone() {

    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async wait(ms) {
        return await Promise.all([this.timeout(ms / 2)], [this.timeout(ms / 2)]);
    }

    getRandomInt() {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default new Utils();