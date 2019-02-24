function linear_search(items, search_item){
	var counter = items.length;
	
	for (var i = 0; i < counter; i++) {
		if(items[i] == search_item){
			return i;
		}
	}
	return -1;
}