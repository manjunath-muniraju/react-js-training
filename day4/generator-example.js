function* getIterator(end) {
	for(let i=0; i < end; i++) {
		yield i;
	}
}

// function* means, that funcion as yield

for(let item of getIterator(3)) {
	console.log(item);
}