// Define a function with a rest perameter that accept items aruments representing the our sandwiches
function makeSandwiche(...items: string[]){
        console.log("\nMaking a sandwich with the following items: \n");
        
        items.forEach(singleItem => console.log(singleItem));

        console.log("\nNow Enjoy Sandwich");

}
// Call the function 3 times with 3 different number of arguments

makeSandwiche("Chicken", "Cheese", "Mayo", "Egg");

makeSandwiche("Bread", "Butter");

makeSandwiche("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");



