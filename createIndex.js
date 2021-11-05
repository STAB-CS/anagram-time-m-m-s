/* use fs with the commands:
	let dictionary = fs.readFileSync("./smallDictionary.txt");
	fs.writeFileSync("./myIndex.txt", "A BIG STRING OF STUFF!");
*/
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');

let dictionary = fs.readFileSync("./smallDictionary.txt").toString().split('\r\n');
console.log(dictionary);

function quickSort(arr){

}

function createList(string){
	let returnValue = [];
	for(let i=0;i<string.length;i++){
		returnValue.push(string.charCodeAt(i));
	}
	return returnValue;
}
function arrToString(arr){
	let returnValue = "";
	for(let i=0;i<arr.length;i++){
		returnValue+=String.fromCharCode(arr[i]);
		// console.log(returnValue);
	}
	return returnValue;
}
let newString = [];
for(let i=0;i<dictionary.length;i++){
	dictionary[i] = createList(dictionary[i]);
	dictionary[i] = dictionary[i].sort();
	dictionary[i] = arrToString(dictionary[i]);
}
console.log(dictionary);

// fs.writeFileSync("./myIndex.txt", );

// Think about your components:
// first you sort each work to
// get a alphanumerical word, and

// then you sort each word against
// each other words alphanumerical word
// Hmm...
// We wish you well!

console.log("Hey!");