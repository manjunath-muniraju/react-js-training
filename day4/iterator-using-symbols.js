
let iterable = {
	[Symbol.iterator]() {
		let start = 0;
		let end = 3;
		return {
			next: function(){
			if(start < end)
				return { value: start++, done: false }
				else {
					return { done: true }
				}
			},
		}
	}
}

for(let item of iterable){
	console.log(item);
}
