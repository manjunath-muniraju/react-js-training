
let mobx = require('mobx')

class CounterStore {

    @mobx.observable value = 0;

    constructor() {
        this.report = this.report.bind(this);
        mobx.autorun(this.report)
    }

    report(){
        console.log('value changed', this.value);
    }

    incrementCounter() {
        this.value++;
    }

    @mobx.computed get squareOfCounter() {
    return this.value * this.value;
}
}

let store = new CounterStore();
//store.incrementCounter();

store.value +=5;
console.log(store.squareOfCounter);