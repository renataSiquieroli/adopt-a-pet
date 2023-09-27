const express = require("express");
const app = express();
const petList = require("./petList");
require("colors");

const PORT = 8080;

// Create the index route
app.get("/", (req, res) => {
  res.send(
    `<h1>Adopt a Pet</h1> 
     <p>Browse through the links below to find your new furry friend:</p> 
     <ul> 
     <li>Dogs</li>
     <li>Cats</li>
     <li>Rabbits</li>
     </ul>`
  );
});

// Create the animals route
app.get("/animals/:pet_type", (req, res) => {
  const [Dogs, Cats, Rabbits] = req.params;
  res.send(
    `<h1>List of: {pet_type} </h1> <ul>pets.map((pet) => <li>${pet_type}</li>)</ul>`
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.bgCyan);
});
