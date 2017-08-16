function* repeat(value, times) {
		for (let i = 0; i < times; i++){
			yield value;
		}
}

for(let item of repeat(10,3)){
	console.log(item);
}
