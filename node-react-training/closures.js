function foo(x) {
    let temp =20;
    function sqaure(x) {
        return x * x;
    }
    function bar(y) {
        return x+y + temp;
    }
    return {
        bar: function(y){
            return x+y+ sqaure(temp);
        },
        anotherPublic: function(){

        }
    };
}

var obj = foo(2);
console.log(obj.bar(3));
