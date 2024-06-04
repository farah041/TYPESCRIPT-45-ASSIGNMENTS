var Guest_List = ['Imran Khan', 'Mudassir', 'Maaz'];
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
// This program is to change the guest list
var absent_Guest = 'Imran Khan';
var new_Guest = 'Ashir ';
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party."));
