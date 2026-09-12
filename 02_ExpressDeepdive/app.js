// External Modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Home page
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to My Website</h1>

        <a href="/register">Go to Registration</a>
    `);
});

// Registration form
app.get('/register', (req, res) => {
    res.send(`
        <h1>Register Yourself</h1>

        <form action="/register" method="POST">

            <label>Name:</label>
            <input 
                type="text" 
                name="name" 
                placeholder="Enter your name"
            >
            <br><br>

            <label>Email:</label>
            <input 
                type="email" 
                name="email" 
                placeholder="Enter your email"
            >
            <br><br>

            <label>Age:</label>
            <input 
                type="number" 
                name="age" 
                placeholder="Enter your age"
            >
            <br><br>

            <input type="submit" value="Register">

        </form>
    `);
});

// Receive form data
app.post('/register', (req, res) => {

    console.log("URL:", req.url);
    console.log("Method:", req.method);
    console.log("Body:", req.body);

    res.send(`
        <h1>Registration Successful 🎉</h1>

        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Age: ${req.body.age}</p>

        <a href="/register">Register another user</a>
    `);
});

// Start server
const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});