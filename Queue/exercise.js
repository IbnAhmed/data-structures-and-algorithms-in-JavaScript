// reverse a queue using add(enQueue), remove(deQueue), isEmpty
console.log('%c// reverse a queue using add(enQueue), remove(deQueue), isEmpty', 'color:#777')
function reverse(queue) {
	s = new Stack();

	while(!queue.isEmpty())
		s.push(queue.deQueue())

	while(!s.isEmpty())
		queue.enQueue(s.pop())
	
}

let q = new Queue();
q.enQueue(10);
q.enQueue(120);
q.enQueue(210);
q.enQueue(310);

console.log('Before reverse')
q.print()
reverse(q);
console.log('After reverse')
q.print()
