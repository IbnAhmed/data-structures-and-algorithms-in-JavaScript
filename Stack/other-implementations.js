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

// let newLLStack = new StackWithLinkedList();
// if(newLLStack.isEmpty()){
// 	newLLStack.push(20);
// 	newLLStack.push(31);
// }

// console.log('[Stack With LinkedList] Top value', newLLStack.peek());
// console.log('[Stack With LinkedList] Top value removed', newLLStack.pop());