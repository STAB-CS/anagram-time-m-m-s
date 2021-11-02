/* use fs with the commands:
	let dictionary = fs.readFileSync("./smallDictionary.txt");
	fs.writeFileSync("./myIndex.txt", "A BIG STRING OF STUFF!");
*/
const fs = require('fs');

let dictionary = fs.readFileSync("./smallDictionary.txt").toString().split('\r\n');
console.log(dictionary);
console.log("hi".charAt(0));
// function sortSting(string){
// 	return("a");
// }
// for(let i=0;i<dictionary.length;i++){
// 	console.log(dictionary[i]);
// }

// fs.writeFileSync("./myIndex.txt", );

// Think about your components:
// first you sort each work to
// get a alphanumerical word, and

// then you sort each word against
// each other words alphanumerical word
// Hmm...
// We wish you well!

console.log("Hey!");