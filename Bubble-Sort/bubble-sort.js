function bubble_sort(items){
	var temp;
	var counter = items.length;

	for (var i = 0; i < counter; i++) {
		for (var j = 0; j < counter - i - 1; j++) {
			
			if(items[j] > items[j+1]){
				temp = items[j];
				items[j] = items[j+1];
				items[j+1] = temp;
			}
			
		}

	}

	return items;
}