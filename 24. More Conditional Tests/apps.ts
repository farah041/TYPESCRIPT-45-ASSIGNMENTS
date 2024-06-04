// Equality and Inequality Test 1
console.log("Equality test with string:", "Apple" === "Apple");

// Eqality and Inequality Test 2
console.log("Inequality test with string: ", ("Apple" as string) != "orange");

// Tests using the lower case funcation 
console.log("Lower case funcation test: ", "HELLO". toLowerCase() === "hello");

// Numerical tests involving equality 
console.log("Equality test with numbers: ", 26 === 26);
// Numerical tests involving inequality
console.log("Inquality test with numbers: ", (26 as number)  != 35);


//greater than test
console.log("Greater than test: ", 10 > 5);
//greater than test
console.log("Less than test: ", 5 < 10);

//greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//less than or equal to
console.log("less than or equal to test:  ", 5 <= 10);

//Tests using "and"  and "or" operator
console.log("And operator tests: ", 5===5 && 10 > 5);
//Tests using "or" operator 
console.log("or operator test: ", 5===5 || false);

//Test whether an item is in a array 
const fruits :string[] =['Pear', 'Banana', 'Peach'];
console.log('Test "Pear" in the array: ', fruits.includes("Pear"));

//Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ', !fruits.includes("Apple"));









