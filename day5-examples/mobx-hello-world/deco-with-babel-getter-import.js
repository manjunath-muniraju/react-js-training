import {observable, computed, autorun} from 'mobx';

//let mobx = require('mobx')

class CounterStore {

@observable value = 0;

    constructor() {
        this.report = this.report.bind(this);
        autorun(this.report)
    }

    report(){
        console.log('value changed', this.value);
    }

    incrementCounter() {
        this.value++;
    }

    @computed get squareOfCounter() {
    return this.value * this.value;
}
}

let store = new CounterStore();
//store.incrementCounter();

store.value +=5;
console.log(store.squareOfCounter);