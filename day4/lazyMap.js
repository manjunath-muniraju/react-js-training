function* lazyMap(arr, func) {
	for(let item of arr) {
		yield func(item);
	}	
}

for(let item of lazyMap([1,2,3], x => x * x)) {
	console.log(item);
}

//with condition
console.log();
console.log("With condition");
let ctr = 0;
for(let item of lazyMap([1,2,3], x => x * x)) {
	ctr++;
	if (ctr > 1)
		break;
	console.log(item);
} 