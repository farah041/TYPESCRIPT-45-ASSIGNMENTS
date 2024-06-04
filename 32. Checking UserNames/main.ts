// Array of Current Users
let current_users = ["Munira", "farah", "Tahir", "Mudassir", "Insha"]

// Array of New Users
let new_users = ["Mansoor", "Farida", "Farah", "Ashir", "Tahir"]

// Loop through new_users to check for usernames avaibility
    new_users.forEach(new_one_user => {

    // Making a condition for username already exist and save in our_condition veriable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Different messages using If_Else statements
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})



