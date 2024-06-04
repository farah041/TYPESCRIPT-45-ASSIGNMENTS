var Guest_List = ['Imran Khan', 'Mudassir', 'Maaz'];
// This program is to change the guest list
var absent_Guest = 'Imran Khan';
var new_Guest = 'Ashir ';
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party."));
console.log('Good News! We find Big Table So we are inviting 3 more guest.');
Guest_List.unshift('Tahir Ansari');
Guest_List.splice(2, 0, 'Mansoor Ahmed');
Guest_List.push('Kashif Ali');
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
