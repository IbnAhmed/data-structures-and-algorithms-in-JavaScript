
document.write("<b>QUICK SORT</b><br>");

arr = [2,100,8,4,6,20,11,23,7,8];

quickSort(arr, 0, arr.length -1);

document.write(arr);

function quickSort(arraySort,low,high){
	if(low<high){

    	pi = partition(arraySort,low,high);
        
        quickSort(arraySort, low, pi-1);
        
        quickSort(arraySort, pi+1, high);
        
    }
}


function partition (arraySort, low, high){
	pivot = arraySort[high];
    
    i = low-1;
    
    for(j=low;j<=high-1;j++){
    	if(arraySort[j] < pivot){
        	i++;
            temp = arraySort[j];
            arraySort[j] = arraySort[i];
            arraySort[i] = temp;
        }
    }
    
    temp = arraySort[i+1];
    arraySort[i+1] = arraySort[high];
    arraySort[high] = temp;
	
    return i+1;
}
