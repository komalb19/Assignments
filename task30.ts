//  Make a array of five or more usernames, including the name 'admin'
let usernames: string[] = ["admin", "Komal", "Sara", "Mirha", "Rumman"];

// If the username is 'admin', print a special greeting
for (let username of usernames)
if (username == "admin") {console.log(`Hello ${username}, would you like to see a status report?`)}
else {console.log(`Hello ${username}, thank you for logging in again`)}