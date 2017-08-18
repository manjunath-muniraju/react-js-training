//this example are to mimic decorators implementation

function log(func) {
    return function() {
        console.log('Entering', func.name);
        let value = func(...arguments);
        console.log('Finihsed', func.name);
        return value;
    }
}

function foo(x) {
    console.log('Foo',x);
}
foo = log(foo)


function sum(x,y) {
    return x+y;
}

sum = log(sum);

foo(5);

console.log(sum(2,3));