const express = require("express");
const app = express();

const port = 4000;

// Logging Middleware
app.use((req, res, next) => 
    {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => 
    {
    res.send("Welcome to the Logging Middleware Example!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});