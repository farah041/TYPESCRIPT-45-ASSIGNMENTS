// Creating a Array
var userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
// Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log('Hello ${oneUser}, would you like to see a status report?');
    }
    else {
        console.log('Hello ${oneUser}, thank you for logging in again. ');
    }
});
