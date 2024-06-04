"use strict";
// Creating a function with perameters which return a values in string
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city},  ${country}`;
}
// Calling as function and print the retun=rned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log("Barlin", "Germany");
