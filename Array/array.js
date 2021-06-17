class Array{
	arr = [];

	insert(item){
		this.arr[this.length()] = item;
		return true;
	}
	print(){
		this.arr.forEach((item) => {
			console.log(item)
		})
	}
	removeAt(index){
		if(this.arr[index]){
			const length = this.length() - 1;
			for(let i = index; i < length; i++){
				this.arr[i] = this.arr[i+1];
			}
			this.arr.pop();
			return true;
		}
		return false;
	}
	indexOf(item){
		for(let i = 0; i < this.length(); i++){
			if(item == this.arr[i]){
				return i;
				break;
			}
		}
		return -1;
	}
	length(){
		let count = 0;
		this.arr.forEach(() => {
			count++;
		})
		return count;
	}
	max(){
		if(this.arr[0]){
			let max = this.arr[0];
			for(let i = 1; i < this.length(); i++){
				if(max < this.arr[i]){
					max = this.arr[i];
				}
			}
			return max;
		}

		return 0;
	}
	intersect(){
		let intersectArr = [];
		let count = 0;
		let contain = 0;
		for(let i = 0; i < this.length(); i++){
			contain = 0;
			for(let j = 0; j < count; j++){
				if(this.arr[i] == intersectArr[j]){
					contain = 1;
					break;
				}
			}
			if(contain == 0){
				intersectArr[count++] = this.arr[i];
			}
		}
		return intersectArr;
	}
	reverse(){
		let reversedArr = [];
		let count = 0;
		for(let i = this.length() - 1; i >= 0; i--){
			reversedArr[count++] = this.arr[i];
		}
		this.arr = reversedArr;
		return true;
	}
	insertAt(item, index){
		if(this.arr[index]){
			const length = this.length();
			for(let i = length; i >= index; i--){
				this.arr[i] = this.arr[i-1];
			}
			this.arr[index] = item;
			return true;
		}
		return false;
	}
}

let tempArr = new Array();
tempArr.insert(1);
tempArr.insert(2);
tempArr.insert(3);
tempArr.insert(10);
tempArr.print();