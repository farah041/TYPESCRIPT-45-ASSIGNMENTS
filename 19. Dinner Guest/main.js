var Guest_List = ['Imran Khan', 'Mudassir', 'Maaz'];
"";
var absent_Guest = 'Imran Khan';
var new_Guest = 'Ashir';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find Big Table So we are inviting 3 more guests.')
Guest_List.unshift('Tahir Ansari');
Guest_List.splice(2, 0, 'Mansoor Ahmed');
Guest_List.push('Kashif Ali');
// for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
while (Guest_List.length > 2) {
    var remove_Guest = Guest_List.pop();
    //      console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner,`);
}
// for(let i=0; i<Guest_List.length; i++){
//      console.log(`Dear Mr. '+ Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n`)
// }
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log("Total number of Guest Are: ".concat(Guest_List.length));
