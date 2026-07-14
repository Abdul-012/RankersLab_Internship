// Array of user objects with name and age properties
let users=[
    {
        name:"Abdul",
        age:23
    },
    {
        name:"Rahman",
        age:24
    },
    {
        name:"Aman",
        age:21
    },
    {
        name:"Rohit",
        age:22
    }
];

// Sort users by age in ascending order
let sortedUsers = users.sort((a,b) => a.age - b.age);

console.log("Users sorted by age:");
console.log(sortedUsers);
