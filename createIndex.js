/* use fs with the commands:
	let dictionary = fs.readFileSync("./smallDictionary.txt");
	fs.writeFileSync("./myIndex.txt", "A BIG STRING OF STUFF!");
*/
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');

let dictionary = fs.readFileSync("./smallDictionary.txt").toString().split('\r\n');
console.log(dictionary);

function quickSort(arr){
    let pivot = arr[0];
    let sml = [];
    let big = [];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            sml.push(arr[i]);
            sml = quickSort(sml);
        }
        else{
            big.push(arr[i]);
            big = quickSort(big);
        }
    }
    returnValue = [];
    for(let i=0;i<sml.length;i++){
        returnValue.push(sml[i]);
    }
    returnValue.push(pivot);
    for(let i=0;i<big.length;i++){
        returnValue.push(big[i]);
    }
    return returnValue;
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
	dictionary[i] = dictionary[i].split("");//createList(dictionary[i]);
	dictionary[i] = quickSort(dictionary[i]);//dictionary[i].sort();
	dictionary[i] = dictionary[i].join("");//arrToString(dictionary[i]);
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