class Node{
	constructor(data, next = null){
		this.data = data;
		this.next = next
	}
}

class LinkedList{
	constructor(){
		this.first = null;
		this.size = 0
	}

	addFirst(data){
		this.first = new Node(data, this.first);
		this.size++;
		return true;
	}

	addLast(data){
		let node = new Node(data);
		let current;

		if(this.first == null){
			this.first = node;
		} else{
			current = this.first;

			while(current.next){
				current = current.next
			}

			current.next = node;
		}

		this.size++;

		return true;
	}

	deleteFirst(){
		if(this.first){
			this.first = this.first.next;
			this.size--;
			return true;
		}
		return false;
	}

	deleteLast(){
		let prev, current;
		if(this.size == 1) {
			return this.deleteFirst();
		} else if(this.first){
			current = this.first;

			while(current.next){
				if(current?.next?.next == null){
					current.next = null
					this.size--;
					return true;
				}
				current = current.next;
			}

		}
		return false;
	}
	indexOf(data){
		let current;
		current = this.first;

		let index = 0;
		while(current){
			if(current.data == data){
				return index;
			}
			current = current.next;
			index++;
		}

		return -1;
	}

	findByIndex(index){
		let current;
		current = this.first;

		let tempIndex = 0;
		while(current){
			if(tempIndex == index){
				return current.data;
			}
			tempIndex++;
			current = current.next;
		}

		console.error('Position bigger or smaller than LinkedList\'s size!');
	}

	contains(data){
		return this.indexOf(data) != -1;
	}


	toArray(){
		let arr = [];

		let current = this.first;


		while(current){
			arr.push(current.data);
			current = current.next;
		}

		return arr;
	}

	reverse(){
		let current = this.first;
		let reversedFirst = null

		while(current){
			reversedFirst = new Node(current.data, reversedFirst);
			current = current.next;
		}

		this.first = reversedFirst;

		return true;
	}

	getKthFromTheEnd(k){
		// my solution
		
		// if(k > this.size || k < 1){
		// 	console.error('Position bigger or smaller than LinkedList\'s size!');
		// } else{
		// 	let index = this.size - k;
		// 	return this.findByIndex(index);
		// }
		

		// mosh solution (if this linked list doesn't have size)

		if(k != 0){
			let firstNode = this.first;
			let secondNode = this.first;

			for (var i = 1; i < k; i++) {
				if(secondNode.next){
					secondNode = secondNode.next
				} else {
					console.error('Position bigger or smaller than LinkedList\'s size!');
					return;
					break;
				}
			}
			while(true){
				if(secondNode.next == null){
					return firstNode.data;
				}
				firstNode = firstNode.next
				secondNode = secondNode.next
			}
		} else {
			console.error('Position smaller than LinkedList\'s size!');
		}

	}

	print(){
		let current = this.first;

		while(current){
			console.log(current.data);
			current = current.next;
		}
	}

	printMiddle(){
		if(this.first){
			let firstNode = this.first;
			let secondNode = this.first;

			while(secondNode.next && secondNode.next.next){
				firstNode = firstNode.next;
				secondNode = secondNode.next.next

			}

			if(secondNode.next == null){
				console.log(firstNode.data);
			} else {
				console.log(firstNode.data, firstNode.next.data);
			}
		} else {
			return false;
		}
	}

	hasLoop(){
		if(this.first){
			// using floyd's cycle finding algorithm
			let tortoise = this.first;
			let hare = this.first;

			while(hare.next && hare.next.next){
				tortoise = tortoise.next;
				hare = hare.next.next

				if(hare.data == tortoise.data){
					return true;
				}
			}
		}

		return false;
	}
}

let ll = new LinkedList();
ll.addFirst(20);
ll.addFirst(40);
ll.addLast(10);
ll.print();