// Define a function to print each magicians name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
//Define any array containing magicians name
var magicians_names = ["Harry Poter", "Unzi", "Insha"];
//Call the function to print each magicians name
show_magicians(magicians_names);
