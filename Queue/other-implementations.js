
// Queue with LinkedList
class QueueWithLinkedList{
	constructor(){
		this.linkedlistQueue = new LinkedList();
		this.count = 0;
	}

	// time complexity 0(1)
	enQueue(item){
		this.linkedlistQueue.addLast(item);
		this.count++;
		return this.count;
	}

	// time complexity 0(1)
	deQueue(){
		if(this.count > 0){
			let item = this.linkedlistQueue.findByIndex(0);
			this.linkedlistQueue.deleteFirst();
			this.count--;
			return item;
		} 
		return undefined;

	}

	// time complexity 0(1)
	peek(){
		return this.linkedlistQueue.findByIndex(0);
	}
	
	// time complexity 0(1)
	isEmpty(){
		return this.count == 0;
	}
	print(){
		this.linkedlistQueue.print()
	}
}

// Queue with Stack
class QueueWithStack{
	constructor(){
		this.stackQueue = new Stack();
		this.count = 0;
	}

	// time complexity 0(1)
	enQueue(item){
		this.stackQueue.push(item);
		this.count++;
		return this.count;
	}

	// time complexity 0(n)
	deQueue(){
		if(this.count > 0){
			let tempStack = new Stack();

			while(!this.stackQueue.isEmpty()){
				tempStack.push(this.stackQueue.pop())
			}
			let item = tempStack.pop();

			while(!tempStack.isEmpty()){
				this.stackQueue.push(tempStack.pop())
			}

			this.count--;

			return item;
		} 
		return undefined;

	}

	// time complexity 0(n)
	peek(){
		let tempStack = new Stack();
		
		while(!this.stackQueue.isEmpty()){
			tempStack.push(this.stackQueue.pop())
		}

		let item = tempStack.peek();

		while(!tempStack.isEmpty()){
			this.stackQueue.push(tempStack.pop())
		}

		return item;
	}

	// time complexity 0(1)
	isEmpty(){
		return this.count == 0;
	}
	print(){
		this.stackQueue.print()
	}
}

// let newQueueLinkedList = new QueueWithLinkedList();
// if(newQueueLinkedList.isEmpty()){
// 	newQueueLinkedList.enQueue(12);
// 	newQueueLinkedList.enQueue(14);
// }

// console.log('[Queue with LinkedList] First value', newQueueLinkedList.peek());
// console.log('[Queue with LinkedList] First value removed', newQueueLinkedList.deQueue());
// console.log('[Queue with LinkedList] Is Empty', newQueueLinkedList.isEmpty());

// let newQueueWithStack = new QueueWithStack();
// if(newQueueWithStack.isEmpty()){
// 	newQueueWithStack.enQueue(121);
// 	newQueueWithStack.enQueue(124);
// }

// console.log('[Queue with Stack] First value', newQueueWithStack.peek());
// console.log('[Queue with Stack] First value removed', newQueueWithStack.deQueue());
// console.log('[Queue with Stack] Is Empty', newQueueWithStack.isEmpty());
