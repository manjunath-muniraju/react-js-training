class Person{
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

var p = new Person('Manju');
console.log(p.getName());