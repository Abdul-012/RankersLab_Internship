const express = require("express");

const app = express();
const port = 3000;

// In-memory student data
let students = [
    {
        id: 1,
        name: "Abdul",
        age: 22,
        course: "B.Tech"
    },
    {
        id: 2,
        name: "Rahman",
        age: 23,
        course: "MBA"
    }
];

// Home Route
//json response for the home route
app.get("/", (req, res) => 
    {
    res.json({
        message: "Welcome to the Student API!"
    });
});

// GET All Students
app.get("/students", (req, res) => 
    {
    try 
    {
        res.status(200).json(students);
    } 
    catch (error) 
    {
        res.status(500).json(
            {
            message: "Internal Server Error"
        });
    }
});

// GET Student by ID
app.get("/students/:id", (req, res) => 
    {
    try 
    {
        const id = Number(req.params.id);

        const student = students.find(s => s.id === id);

        if (!student) 
            {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } 
    catch (error) 
    {
        res.status(500).json(
            {
            message: "Internal Server Error"
        });
    }
});

// POST Create Student
app.post("/students", (req, res) => 
    {
    try 
    {
        const { id, name, age, course } = req.body;

        if (!id || !name || !age || !course) 
            {
            return res.status(400).json(
                {
                message: "All fields are required"
            });
        }

        const existingStudent = students.find(s => s.id === id);

        if (existingStudent) 
            {
            return res.status(400).json({
                message: "Student ID already exists"
            });
        }

        const newStudent = {
            id,
            name,
            age,
            course
        };

        students.push(newStudent);

        res.status(201).json({
            message: "Student created successfully",
            student: newStudent
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

// PUT Update Student
app.put("/students/:id", (req, res) => 
    {
    try 
    {
        const id = Number(req.params.id);

        const index = students.findIndex(s => s.id === id);

        if (index === -1) 
            {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        students[index] = 
        {
            ...students[index],
            ...req.body
        };

        res.status(200).json({
            message: "Student updated successfully",
            student: students[index]
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

// DELETE Student
app.delete("/students/:id", (req, res) => 
    {
    try 
    {
        const id = Number(req.params.id);

        const index = students.findIndex(s => s.id === id);

        if (index === -1) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        students.splice(index, 1);

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json(
            {
            message: "Internal Server Error"
        });
    }
});

// Start Server
app.listen(port, () => 
    {
    console.log(`Server is running on http://localhost:${port}`);
});