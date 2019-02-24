function linear_search(items, search_item){
	for (var i = 0; i < items.length; i++) {
		if(items[i] == search_item){
			return i;
		}
	}
	return -1;
}