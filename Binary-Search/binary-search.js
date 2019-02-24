function binary_search(items, search_item){
	counter = items.length;
	left = 0;
	right = counter-1;
	
	while(left <= right){
		mid = parseInt((left+right)/2);
		if(items[mid] == search_item){
			return mid;
		} else {
			if(items[mid] < search_item){
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}

	return -1;
}