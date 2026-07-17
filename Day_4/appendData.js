const fs = require("fs");

const dataToAppend = "data is appended successfully.";

fs.appendFile("../file.txt", dataToAppend, (err) =>
    {
    if (err)
        {
        console.log(err);
        return;
        }
    else
        {
        console.log("Data appended successfully.");
        }
    }
);