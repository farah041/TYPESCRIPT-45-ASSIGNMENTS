var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and Print its Orginal Order
var countriesToVisit = ["Chaina", "Danmark", "Brazil", "Angentina"];
console.log("Orginal Order:", countriesToVisit);
// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesToVisit);
// Print the Array in Reversed Order without modipying the Acutal Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesToVisit);
// We have change the Orginal Array Order Now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
//Print the Array to show that it's back to its orginal order
console.log("Back to Orignal Order", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have Change again the Orginal Array Order Now in reverse order again
console.log("Orginal Array Reversed Again:", countriesToVisit.reverse());
