class Entry{
	constructor(key, value){
		this.key = key;
		this.value = value;
	}		
}

class HashTable{
	constructor(){
		this.hashArr = Array(100);
		this.count = 0;
	}

	put(key, value){
		let index = this.hash(key);
		let entry = new Entry(key, value);


		if(typeof this.hashArr[index] == 'undefined'){
			this.hashArr[index] = new LinkedList()
		}

		let bucket = this.hashArr[index];

		for (var i = 0; i < bucket.size; i++) {
			if(bucket.findByIndex(i).key == key){
				bucket.findByIndex(i).value = value
				return;
			}
		}

		bucket.addLast(entry);
		this.count++;
	}

	get(key){
		let index = this.hash(key);
		let bucket = this.hashArr[index];
		
		if(bucket){
			for (var i = 0; i < bucket.size; i++) {
				if(bucket.findByIndex(i).key == key){
					return bucket.findByIndex(i).value;
				}
			}
		}
		return null
	}

	remove(key){
		let index = this.hash(key);
		let bucket = this.hashArr[index];
		
		if(bucket){
			for (var i = 0; i < bucket.size; i++) {
				if(bucket.findByIndex(i).key == key){
					this.count--;
					return bucket.deleteByIndex(i);
				}
			}
		}
	}

	size(){
		return this.count;
	}

	hash(key = 0){
		if(isNaN(key)){
			let sum = 0;
			for(let i = 0; i < key.length; i++){
				sum += key.charCodeAt(i);
			}
			key = sum
		}
		return key % this.hashArr.length;
	}
}

// let ht = new HashTable()
// ht.put(1, 23)
// ht.put(2, 'sda23')
// ht.get(1)
// ht.remove(1)