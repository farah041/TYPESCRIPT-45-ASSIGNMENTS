let Guest_List :string[] = ['Imran Khan', 'Mudassir', 'Maaz'];

// This program is to change the guest list
 
let absent_Guest :string = 'Imran Khan'; 

let new_Guest :string = 'Ashir ';

Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);


console.log('Good News! We find Big Table So we are inviting 3 more guest.')

Guest_List.unshift('Tahir Ansari');
Guest_List.splice(2 , 0, 'Mansoor Ahmed');
Guest_List.push('Kashif Ali');

for(let i=0; i<Guest_List.length; i++){

      console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}










