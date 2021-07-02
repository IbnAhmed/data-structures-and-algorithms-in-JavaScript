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
	// for priority queue
	enQueuePriority(item){
		if(typeof item == 'number'){
			let i;
			for (i = this.count; i >= 0; i--) {
				if(i > 0 && this.arrayQueue[i-1] > item){
					this.arrayQueue[i] = this.arrayQueue[i-1]
				} else {
					this.arrayQueue[i] = item;
					break;
				}
			}

			this.count++
			return i+1;
		} else {
			console.error('Must be number')
			return null;
		}
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


	/*
		Given an integer K and a queue of integers, write code to reverse the
		order of the first K elements of the queue.
		Input: Q = [10, 20, 30, 40, 50], K = 3
		Output: Q = [30, 20, 10, 40, 50]
	*/
	reverse(k = this.count){
		if(k > this.count){
			console.error('K bigger than total size')
			return null;
		} else {
			let reversedArr = [];
			for (let i = k-1; i >= 0; i--) {
				reversedArr.push(this.arrayQueue[i]) 
			}
			for (let i = 0; i < k; i++) {
				this.arrayQueue[i] = reversedArr[i]
			}
		}
	}
}

// let newQueue = new Queue();
// if(newQueue.isEmpty()){
// 	newQueue.enQueue(2);
// 	newQueue.enQueue(3);
// }

// console.log('[Queue] First value', newQueue.peek());
// console.log('[Queue] First value removed', newQueue.deQueue());
// console.log('[Queue] Is Empty', newQueue.isEmpty());
