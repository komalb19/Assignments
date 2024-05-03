// inviting guests to dinner
let guest: any = ["Mirha", "Ayzal", "Rumman"];
for (let i=0; i<guest.length; i++) {console.log(`Hello ${guest[i]}, you are invited to dinner today.`)}
// one guest couldn't make, updating the guest list
console.log("Ayzal could not make to the dinner today")
guest[1] = "Anoosha";
for (let i=0; i<guest.length; i++) {console.log(`Hello ${guest[i]}, you are invited to dinner today.`)}
// found a bigger dinner table
console.log("We have found a bigger dinner table.");
guest[3] = "Ruhab";
guest[4] = "Areesha";
for (let i=0; i<guest.length; i++) {console.log(`Hello ${guest[i]}, you are invited to dinner today.`)}
// task19 - number of guests that are invited
console.log(`The total number of guests are ${guest.length}.`)
// shrinking guest list to 2
while (guest.length>2){console.log(`Sorry ${guest.pop()}, only 2 guests are invited`)};
console.log(`The final guests are:`,guest);
for (let i=0; i<guest.length; i++) {console.log(`Congratulations ${guest[i]}, you are invited to dinner today.`)}
while (guest.length>0){console.log(`${guest.pop()} you are also out of the list`)}
console.log('My list is empty now')
