function selection_sort(items){
	var temp,min_index;
	var counter = items.length;

	for (var i = 0; i < counter - 1; i++) {
		min_index = i;

		for (var j = i+1; j < counter; j++) {
			
			if(items[min_index] > items[j]){
				min_index = j;
			}
			
		}

		if(min_index != i){
			temp = items[i];
			items[i] = items[min_index];
			items[min_index] = temp;
		}

	}

	return items;
}