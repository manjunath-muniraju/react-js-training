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
		setTimeout(() => reject(x + 10),100);
	});
}

Promise.all([asyncAdd5(10), asyncAdd10(10)])
	.then((data) => {
		console.log('Recived', data, error);
	}).catch(error => {
		console.log('Recived error', error);
	})