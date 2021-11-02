/* use fs with the commands:
	let dictionary = fs.readFileSync("./smallDictionary.txt");
	fs.writeFileSync("./myIndex.txt", "A BIG STRING OF STUFF!");
*/
const fs = require('fs');

let dictionary = fs.readFileSync("./smallDictionary.txt").toString().split('\r\n');
console.log(dictionary);
function createList(string){
	let returnValue = [];
	for(let i=0;i<string.length;i++){
		returnValue.push(string.charCodeAt(i));
	}
	return returnValue;
}
for(let i=0;i<dictionary.length;i++){
	console.log(dictionary[i]);
}
console.log(createList("abc"));

// fs.writeFileSync("./myIndex.txt", );

// Think about your components:
// first you sort each work to
// get a alphanumerical word, and

// then you sort each word against
// each other words alphanumerical word
// Hmm...
// We wish you well!

console.log("Hey!");