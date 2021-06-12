function quick_sort(arr){
	quick_sort_main(arr, 0, arr.length - 1);

	return arr;
}

function quick_sort_main(arr,low,high){
	if(low<high){

    	pi = partition(arr,low,high);
        
        quick_sort_main(arr, low, pi-1);
        
        quick_sort_main(arr, pi+1, high);
        
    }
}

function partition(arr, low, high){
	pivot = arr[high];
    
    i = low-1;
    
    for(j=low;j<=high-1;j++){
    	if(arr[j] < pivot){
        	i++;
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    
    temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
	
    return i+1;
}