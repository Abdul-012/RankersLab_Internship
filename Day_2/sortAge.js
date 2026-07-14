 
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
]
 let sortedUsers = users.sort((a,b) => a.age - b.age);
 console.log(sortedUsers);
