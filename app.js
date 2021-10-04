//  install express "npm install express --save" in the terminal for the project folder

// doing it the node.js way
// const http = require("http");

// http.createServer((_, res) => {
//   res.write('My NodeJS Server is alive!');
//   res.end();
// }).listen(4040);


// Using express.js
// run with node app.js

// Import Express
const express = require('express');

// Import Body Parser
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4041;

// Access URL and JSON data
app.use(express.urlencoded({ extended: false }));
app.use (express.json());

//Create an array of users
const users = [{name: 'Tony', email: 'tony@mail.com'}]


app.get('/', (req, res) => {
    res.send('Your Express App');
});


// Create a GET route to send back full list of users
app.get('/users', (req,res) => {
    res.json({ ok: true, users });

});

// request dog example
app.get('/dogs', (req,res) => {
    const dogs = [ 
        {
            dogName: 'Rocket',
            dogBreed: 'German Shephard'
        },
        {
            dogName: 'Kyle',
            dogBreed: 'Retriever'
        }
    ];
    res.json(dogs);

})


// Get a specific user based on the name and return that user back
app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, user });

});


//Create a POST request to add a user
app.post('/adduser', (req,res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ ok: true, users });
    }
});

app.get('/users', (_, res) => {
    res.json({ ok: true, users });
});


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});


// Command to run nodemon: "nodemon app.js"



