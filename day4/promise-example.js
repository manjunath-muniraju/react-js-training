//this came with ES6
/*
setTimeout(() => {
	console.log('Hello');
}, 1000);
*/
//how to convert above code async

function waitASecond(func) {
	return new Promise((resolve,reject) => {
		setTimeout(resolve,1000);
	});
}
let p = waitASecond();
console.log(p);

p.then(() => {
		console.log('Hello');
	})