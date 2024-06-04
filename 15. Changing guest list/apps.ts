let Guest_List :string[] = ['Imran Khan', 'Mudassir', 'Maaz'];

for (let i=0; i<Guest_List.length; i++){

     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');

}

// This program is to change the guest list
 
let absent_Guest :string = 'Imran Khan'; 

let new_Guest :string = 'Ashir ';

Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);




