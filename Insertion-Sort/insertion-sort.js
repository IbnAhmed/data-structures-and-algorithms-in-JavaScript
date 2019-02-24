function insertion_sort(items){
	var item,j;
	var counter = items.length;
	
	for (var i = 1; i < counter; i++) {
		
		item = items[i];
		j = i-1;

		while(j >= 0 && items[j] > item){
			items[j+1] = items[j];
			j--;
		}

		items[j+1] = item;

	}

	return items;
}