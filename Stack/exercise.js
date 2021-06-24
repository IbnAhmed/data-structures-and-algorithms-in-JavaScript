// reverse a string using stack

function reverse(str) {
	if(typeof str == 'string'){	
		let strArr = str.split('');
		let reversedStr = "";

		strArr.forEach((s) => {
		})
		for (var i = strArr.length - 1; i >= 0; i--) {
			reversedStr += strArr.pop()
		}

		return reversedStr;
	} else {
		console.error('input is not string');
		return str;
	}
}

let normalString = "abcdefghijklmnopqrstuvwxyz";

console.log('------ Reversed String ------');
console.log('Normal String', normalString);
console.log('Reversed String', reverse(normalString));



// Balanced expression using stack

function balancedExpression(exp='') {
	const opening = ['(', '[', '{', '<'];
	const closing = [')', ']', '}', '>'];
	let storage = new Stack();

	for(let i=0; i<exp.length; i++){
		if(opening.indexOf(exp[i]) != -1){
			storage.push(exp[i])
		} else if(closing.indexOf(exp[i]) != -1){
			let index = closing.indexOf(exp[i]);
			let top = storage.pop();
			if(top != opening[index]){
				console.log("%cExpression in not balanced", "color:red; font-size: 18px");
				return false;
			}
		}
	}

	if(storage.isEmpty()){
		console.log("%cExpression is balanced", "color:green; font-size: 18px");
		return true;
	} else {
		console.log("%cExpression in not balanced", "color:red; font-size: 18px");
		return false;
	}
}

let normalExpression = "(asd(sd)[sd]s>)";
console.log('------ Balanced Expression ------');
console.log('The Expression', normalExpression)
balancedExpression(normalExpression)