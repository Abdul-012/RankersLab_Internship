const http = require("http");

const port=3000;

const server = http.createServer((req,res) =>
{
    res.writeHead(200,
    {
        "Content-Type":"text/plain"
    }
    );
    res.end("Welcome to the Node.js Server!");
});
server.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});


// const express = require("express");
// const app= express();

// const port = 8080;

// app.get("/" , (req, res) => 
// {
//     res.send("Hello World");
// });

// app.listen(port, ()=>
// {
//     console.log(`Server is running on http://localhost:${port}`);
// });