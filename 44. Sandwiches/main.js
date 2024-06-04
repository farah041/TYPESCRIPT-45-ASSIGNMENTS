// Define a function with a rest perameter that accept items aruments representing the our sandwiches
function makeSandwiche() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makeSandwiche("Chicken", "Cheese", "Mayo", "Egg");
makeSandwiche("Bread", "Butter");
makeSandwiche("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
