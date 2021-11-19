const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const queryDB = require('./database/dbcon');

const museumRoutes = require('./routes/api/museums');
const exhibitionRoutes = require('./routes/api/exhibitions');
const getMuseumRoutes = require('./routes/api/museum');

const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

// body parsing middleware
app.use(express.json());

// use routes

app.use('/api/museums', museumRoutes);
app.use('/api/exhibitions', exhibitionRoutes);
app.use('/api/museum', getMuseumRoutes);

// serve static assets if in production
console.log("running in: ", process.env.NODE_ENV || "development");
if (process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('mac-app/build'));
  
  app.get('*', (req, res) => {
    // res.sendFile('index.html');
    res.sendFile(path.join(__dirname, 'mac-app', 'build', 'index.html'));
  });
}

app.get('/museums', async (req, res) => {
  await queryDB(`get * from Museums`)
      .then(result => {
        console.log(result)
        res.json(result)
      })
      .catch(err => res.send(err.sqlMessage))

});

app.get('*', (req, res) => {
  res.status(500).json({
    msg: 'Oops this page was not supposed to happen.'
  })
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}.`));
