function binary_search(items, search_item){
	n = items.length;
	left = 0;
	right = n-1;
	
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