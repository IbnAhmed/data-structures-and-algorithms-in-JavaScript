// Stack with array
class Stack{
	arrayStack = [];
	count = 0;

	push(item){
		this.arrayStack[this.count++] = item;
		return this.count;
	}
	pop(){
		if(this.count > 0){
			let item = this.arrayStack[this.count-1]
			delete this.arrayStack[this.count-1];
			this.count--;
			return item;
		} 
		return undefined;

	}
	peek(){
		return this.arrayStack[this.count-1];
	}
	isEmpty(){
		return this.count == 0;
	}
}

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
}

let newStack = new Stack();
if(newStack.isEmpty()){
	newStack.push(2);
	newStack.push(3);
}

console.log('[Stack With Array] Top value', newStack.peek());
console.log('[Stack With Array] Top value removed', newStack.pop());

let newLLStack = new StackWithLinkedList();
if(newLLStack.isEmpty()){
	newLLStack.push(20);
	newLLStack.push(31);
}

console.log('[Stack With LinkedList] Top value', newLLStack.peek());
console.log('[Stack With LinkedList] Top value removed', newLLStack.pop());