// Stack with linked list
class StackWithLinkedList{
	linkedListStack = new LinkedList();

	push(item){
		this.linkedListStack.addLast(item);
		return this.linkedListStack.size;
	}
	pop(){
		if(this.linkedListStack.size > 0){
			let item = this.linkedListStack.findByIndex(this.linkedListStack.size-1)
			this.linkedListStack.deleteLast()
			return item;
		} 
		return undefined;

	}
	peek(){
		return this.linkedListStack.findByIndex(this.linkedListStack.size-1);
	}
	isEmpty(){
		return this.linkedListStack.size == 0;
	}
	print(){
		this.linkedListStack.print();
	}
}

// Stack with two queues
class StackWithTwoQueue{
	queueStack = new Queue();
	secondQueue = new Queue();

	push(item){
		this.queueStack.enQueue(item);
		return this.queueStack.count;
	}
	pop(){
		if(!this.queueStack.isEmpty()){

			while(this.queueStack.count > 1){
				this.secondQueue.enQueue(this.queueStack.deQueue());
			}

			let item = this.queueStack.deQueue();
			
			while(!this.secondQueue.isEmpty()){
				this.queueStack.enQueue(this.secondQueue.deQueue());
			}			

			return item;
		}
		return undefined;
	}
	peek(){
		if(!this.queueStack.isEmpty()){

			let item = undefined;
			while(!this.queueStack.isEmpty()){
				item = this.queueStack.deQueue();
				this.secondQueue.enQueue(item);
			}

			
			while(!this.secondQueue.isEmpty()){
				this.queueStack.enQueue(this.secondQueue.deQueue());
			}			

			return item;
		}
		return undefined;
	}
	isEmpty(){
		return this.queueStack.count == 0;
	}
	print(){
		this.queueStack.print()
	}
}

// let newLLStack = new StackWithLinkedList();
// if(newLLStack.isEmpty()){
// 	newLLStack.push(20);
// 	newLLStack.push(31);
// }

// console.log('[Stack With LinkedList] Top value', newLLStack.peek());
// console.log('[Stack With LinkedList] Top value removed', newLLStack.pop());

// let newQStack = new StackWithTwoQueue();
// if(newQStack.isEmpty()){
// 	newQStack.push(20);
// 	newQStack.push(31);
// }

// newQStack.print();
// console.log('[Stack With Queue] Top value', newQStack.peek());
// console.log('[Stack With Queue] Top value removed', newQStack.pop());
// newQStack.print();