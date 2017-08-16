//this came with ES6
/*
setTimeout(() => {
	console.log('Hello');
}, 1000);
*/
//how to convert above code async

function waitASecond() {
	return new Promise((resolve,reject) => {
		console.log('wait a second');
		setTimeout(() => resolve('Hello'),1000);
	});
}

waitASecond()
	.then(waitASecond)
	.then(data => {
		console.log('Recived', data);
	})