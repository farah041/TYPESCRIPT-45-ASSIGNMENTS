var personName = "Farah";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (Char) { return Char.toUpperCase(); }));
