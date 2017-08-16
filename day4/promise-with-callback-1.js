//this came with ES6
/*
setTimeout(() => {
	console.log('Hello');
}, 1000);
*/
//how to convert above code async

function asyncAdd5(x) {
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve(x + 5),1000);
	});
}

function asyncAdd10(x) {
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve(x + 10),1000);
	});
}


asyncAdd5(10)
	.then(asyncAdd10)
	.then(data => {
		console.log('Recived', data);
	})