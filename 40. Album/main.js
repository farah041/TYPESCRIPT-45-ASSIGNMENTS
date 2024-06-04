"use strict";
// Define the make_album function
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 variables with different values
let album1 = make_album("farah", "Album title 1");
let album2 = make_album("Tahir", "Album title 2");
//Caling a make_album function with third parameter
let album3 = make_album("Maaz", "Album title 3", 10);
// Printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
