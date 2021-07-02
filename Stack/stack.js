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
			let item = this.arrayStack.pop();
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
	print(){
		console.log(this.arrayStack.toString())
	}
}

// let newStack = new Stack();
// if(newStack.isEmpty()){
// 	newStack.push(2);
// 	newStack.push(3);
// }

// console.log('[Stack With Array] Top value', newStack.peek());
// console.log('[Stack With Array] Top value removed', newStack.pop());
