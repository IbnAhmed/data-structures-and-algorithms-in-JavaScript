// Queue with array
class Queue{
	constructor(){
		this.arrayQueue = [];
		this.count = 0;
	}
	enQueue(item){
		this.arrayQueue[this.count++] = item;
		return this.count;
	}
	deQueue(){
		if(this.count > 0){
			let item = this.arrayQueue.shift();
			this.count--;
			return item;
		} 
		return undefined;

	}
	peek(){
		return this.arrayQueue[0];
	}
	isEmpty(){
		return this.count == 0;
	}
	print(){
		console.log(this.arrayQueue.toString())
	}
}

let newQueue = new Queue();
if(newQueue.isEmpty()){
	newQueue.enQueue(2);
	newQueue.enQueue(3);
}

console.log('[Queue] First value', newQueue.peek());
console.log('[Queue] First value removed', newQueue.deQueue());
console.log('[Queue] Is Empty', newQueue.isEmpty());
