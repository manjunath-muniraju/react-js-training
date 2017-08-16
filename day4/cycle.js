function* cycle(items) {
	while(true) {
		for (let item of items){
			yield item;
		}
	}
}

for(let server of cycle(['server1','server2'])){
	console.log(server);
}

// this goes into loop. used in round robin load balancer. This will cycle thru all the healty server.