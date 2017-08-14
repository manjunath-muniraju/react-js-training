//Write a program that prints the numbers from 1 to 100. But if the number is a multiple of 3, print 'Fast' instead of the number. If the number is a multiple of 7, print 'Track'. If the number is a multiple of 3 and 7, print 'FastTrack'.

let i = 1;
while(i<101){
	let printThis;
	if(i%3 == 0 && i%7 == 0) {
		printThis = 'FastTrack';
	} else if(i%3 == 0) {
		printThis = 'Fast';
	} else if (i%7 == 0) {
		printThis = 'Track';
	} else {
		printThis = i;
	}
	
	console.log(printThis);
	i++;
}