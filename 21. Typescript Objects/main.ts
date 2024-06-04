// Write  a program that creates objects containing these items.

interface person {
    age :number,
    name : string,
    nationality : string,
    student : boolean,
}

let Person :person = {
    age : 24 ,
    name : 'Farah' ,
    nationality : 'Pakistan' ,
    student : true
}
// print person
console.log(Person);

// Datatype of car object
interface Car {
    maker : string,
    color : string,
    automatic : boolean
}
// car object
let Car = {
    maker : 'toyota' ,
    color : 'Black' ,
    automatic : true 
}

// print car
console.log(Car);


