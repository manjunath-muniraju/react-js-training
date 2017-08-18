import {observable, computed, autorun, action, useStrict} from 'mobx';

//let mobx = require('mobx')

useStrict(true);

class CounterStore {

@observable value = 0;

    constructor() {
        this.report = this.report.bind(this);
        autorun(this.report)
    }

    report(){
        console.log('value changed', this.value);
    }

    @action
    incrementCounter() {
        this.value++;
    }

    @computed get squareOfCounter() {
    return this.value * this.value;
}
}

let store = new CounterStore();
//store.incrementCounter();

//store.value +=5;
// the above statement will throw error: Since strict-mode is enabled, changing observed observable values outside actions is not allowed.
store.incrementCounter();
store.incrementCounter();
store.incrementCounter();
console.log(store.squareOfCounter);