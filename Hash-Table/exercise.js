// Find the first Non-repeated Character
console.log('%c// Find the first Non-repeated Character', 'color:#777')
function firstNonRepeatedCharacter(string) {
	string = string.toLowerCase();
	let firstChar = null;
	let storage = {};
	for (let i = 0; i < string.length; i++) {
		if(storage[string[i]] == undefined){
			storage[string[i]] = 1
		} else {
			storage[string[i]]++;
		}
	}
	
	for (let i = 0; i < string.length; i++) {
		if(storage[string[i]] == 1){
			firstChar = string[i];
			break;
		}
	}
	return firstChar;
}
let str = 'A green apple';
console.log('[Given string]', str)
console.log('[First Non-repeated Character]', firstNonRepeatedCharacter(str))

// Find the first Repeated Character
console.log('%c// Find the first Repeated Character', 'color:#777')
function firstRepeatedCharacter(string) {
	string = string.toLowerCase();
	let storage = {};
	for (let i = 0; i < string.length; i++) {
		if(storage[string[i]] != undefined){
			return string[i];
		}
		storage[string[i]] = 1;
	}
	
	return null;
}

console.log('[Given string]', str)
console.log('[First repeated Character]', firstRepeatedCharacter(str))


// 1- Find the most repeated element in an array of integers. What is the
// time complexity of this method? (A variation of this exercise is finding
// the most repeated word in a sentence. The algorithm is the same. Here
// we use an array of numbers for simplicity.)
// Input: [1, 2, 2, 3, 3, 3, 4]
// Output: 3

console.log(`%c// Find the most repeated element in an array of integers. What is the
time complexity of this method? (A variation of this exercise is finding
the most repeated word in a sentence. The algorithm is the same. Here
we use an array of numbers for simplicity.)
Input: [1, 2, 2, 3, 3, 3, 4]
Output: 3`, 'color:#777')

function mostFrequent(arr = []){
	let mostFreq = new HashTable();
	let maxCount = 0;
	let mostFreqNum = undefined;

	arr.forEach(item => {
		count = mostFreq.get(item) != null? mostFreq.get(item) : 0;
		mostFreq.put(item, ++count);
		if(count >= maxCount){
			maxCount = count
			mostFreqNum = item
		}
	});

	return mostFreqNum;
}
givenArr = [1, 2, 2, 2, 3, 3, 3, 4, 1];

console.log('[Given Array]', givenArr)
console.log('[Most frequent number from given array]', mostFrequent(givenArr))

// 2- Given an array of integers, count the number of unique pairs of
// integers that have difference k.
// Input: [1, 7, 5, 9, 2, 12, 3] K=2
// Output: 4
// We have four pairs with difference 2: (1, 3), (3, 5), (5, 7), (7, 9). Note
// that we only want the number of these pairs, not the pairs themselves.
console.log(`%c// 2- Given an array of integers, count the number of unique pairs of
integers that have difference k.
Input: [1, 7, 5, 9, 2, 12, 3] K=2
Output: 4
We have four pairs with difference 2: (1, 3), (3, 5), (5, 7), (7, 9). Note
that we only want the number of these pairs, not the pairs themselves.`, 'color: #777')
function countPairsWithDiff(arr, k){
	if(arr.length){
		arr = [...new Set(arr)];
		arr = arr.sort((a, b) => a - b);
		let pair = [];
		for (let i = 0; i < arr.length; i++) {
			for (let j = i; j < arr.length; j++) {
				if(arr[i]+k == arr[j]){
					pair.push([arr[i], arr[j]])
					break;
				}
			}
		}

		console.log(pair);
		return pair.length;
	}
	return 0;
}


givenArr = [1, 7, 5, 9, 2, 12, 3];
k = 7;

console.log('[Given Array and differences]', givenArr, k)
console.log('[total pair]', countPairsWithDiff(givenArr, k))


// 3- Given an array of integers, return indices of the two numbers such
// that they add up to a specific target.

// Input: [2, 7, 11, 15] - target = 9
// Output: [0, 1] (because 2 + 7 = 9)
// Assume that each input has exactly one solution, and you may not use
// the same element twice.
console.log(`%c// Given an array of integers, return indices of the two numbers such
that they add up to a specific target.

Input: [2, 7, 11, 15] - target = 9
Output: [0, 1] (because 2 + 7 = 9)
Assume that each input has exactly one solution, and you may not use
the same element twice.`, 'color:#777')

function twoSum(arr = [], target){
	let indices = [];
	for(let i = 0; i < arr.length; i++){
		for(let k = 0; k < arr.length; k++){
			if(k == i){
				continue;
			}

			if(arr[i] + arr[k] == target){
				indices.push(i);
				indices.push(k);
				break;
			}
		}
		if(indices.length > 0){
			break;
		}
	}

	return indices;
}

givenArr = [2, 7, 11, 15];
target = 22;

console.log('[Given Array and target]', givenArr, target)
console.log('[indices of sum]', twoSum(givenArr, target))