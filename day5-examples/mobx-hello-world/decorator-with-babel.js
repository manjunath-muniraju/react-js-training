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
}

let store = new CounterStore();
store.incrementCounter();

// here we didnt say any setter and getter but still it is working


// now here we can do directly store.value++
store.value++;