// Primitive Type

let user1 = "Priya";
let user2 = user1;

user1 = "Riya";

console.log(user1);
console.log(user2);

// Reference Type

let favApps1 = [
    "Instagram",
    "Spotify"
];

let favApps2 = favApps1;

favApps1.push("Zomato");

console.log(favApps1);
console.log(favApps2);

// Arrays are reference types.
// Both variables point to the same array.