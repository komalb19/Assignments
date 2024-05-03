// Add an if test to Exercise 30 to make sure the list of users is not empty

//  Make a array of five or more usernames, including the name 'admin'
let username: string[] = ["admin", "Komal", "Sara", "Mirha", "Rumman"];

// If the username is 'admin', print a special greeting
if (username.length > 0)
  for (let user of username)
if (user == "admin") {
  console.log(`Hello ${user}, would you like to see a status report?`);
} else {
  console.log(`Hello ${user}, thank you for logging in again`);
}

//  If the list is empty, print the message We need to find some users!
if (username.length = 0){console.log("We need to find some users!")}

// Remove all of the usernames from your array, and make sure the correct message is printed
username.pop();
if (username.length == 0){console.log("We need to find some users!")}