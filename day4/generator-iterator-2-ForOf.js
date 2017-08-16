function getIterator(end){
	let start = 0;
	return {
		next: function(){
			if(start < end)
				return {
					value: start++,
					done: false
				}
				else {
					return {
						done: true
					}
				}
		}
	};
}

// this who for of works internally

let iter = getIterator(5);
while(true){
	let item = iter.next();
	if(item.done)
		break;
	console.log(item.value);	
}