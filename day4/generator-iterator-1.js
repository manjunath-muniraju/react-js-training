function getIterator(end){
	let start = 0;
	return {
		next: function(){
			if(start < end)
				return start++;
		},
		hasNext: () => {
			return start < end
		}
	};
}

let iter = getIterator(5);
while(iter.hasNext()){
	console.log(iter.next());	
}