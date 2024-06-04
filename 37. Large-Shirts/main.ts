//  Making a function
function make_shirt (size:string = "large", printmessage:string = "I Love Typescript")
{
    console.log(`creating a ${size} shirt with the ${printmessage} print on shirt`)
}
//Calling a function with by-default values
make_shirt();

// Calling a function now with Medium size and default message
make_shirt("Medium");

// Calling a function now with Smal size and default message
make_shirt("Small", "I Love Javascript");

