// Define the function to show magicians names

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() it will modify array 

function make_great(magicians: string[]){
  return magicians.map(name => `The Great ${name}`);

}

// Define an array of magicians names
let magicians_names = ["Harry Poter", "Unzi", "Insha"];

// Making a copy of Orignal array through .Slice() function
let copy_magicians_names = magicians_names.slice()

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_names);

//Show both arrays Orignal and Copied

// Orginal
console.log("Orginal Array\n")
show_magicians(magicians_names);

// Copied 
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);
