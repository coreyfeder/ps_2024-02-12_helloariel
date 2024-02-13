let textblock;

let arr1 = [0, 1, 2, 3, 4];
let arr2 = arr1;
let arr3 = [...arr1];
let arr4 = arr1.concat();

textblock = "Here's our setup:\n";
textblock += "\nlet arr1 = [0, 1, 2, 3, 4];";
textblock += "\nlet arr2 = arr1;";
textblock += "\nlet arr3 = [...arr1];";
textblock += "\nlet arr4 = arr1.concat();";
console.log(textblock);

console.log("\nValues:");
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log('\nWhat "equals" arr1?');
console.log(`arr1 == arr1?  ${arr1 == arr1}`);
console.log(`arr1 == arr2?  ${arr1 == arr2}`);
console.log(`arr1 == arr3?  ${arr1 == arr3}`);
console.log(`arr1 == arr4?  ${arr1 == arr4}`);

// using === produces the same result as ==
/* 
console.log(arr1 === arr1);
console.log(arr1 === arr2);
console.log(arr1 === arr3);
console.log(arr1 === arr4);
 */

console.log('\nAfter `arr1[0] = "new_value";`:\n');

console.log(arr1);  // changes, as expected.
console.log(arr2);  // changes!!
console.log(arr3);  // unaffected
console.log(arr4);  // unaffected

console.log('\n After `arr1 = ["blah"];`:\n');

console.log(arr1);  // changes, as expected
console.log(arr2);  // unaffected
console.log(arr3);  // unaffected
console.log(arr4);  // unaffected
