var numList = [1, 2, 3, 4];
function isOdd (num) {
    return (num % 2 !== 0) ? true: false;
}
var result = filter(isOdd, numList);
console.log(result);

function filter(isOdd, numList) {
	return (numList.map(x => {
		if(isOdd(x)) 
			return x;
		})).clean(undefined);
}

/* DO NOT CHANGE THIS LINE */
exports.filter = filter;