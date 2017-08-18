let mobx = require('mobx')

class CounterStore {
    constructor() {
        this.value = 0;
    }

    incrementCounter() {
        this.value++;
    }
}

let store = new CounterStore();
store.incrementCounter();
console.log(store.value);