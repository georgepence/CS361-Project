const express = require('express');
const path = require('path');
// const queryAsync = require('./database/dbcon')
// const fs = require('fs');
// const { query } = require('express');
// const apiRoutes = require('./routes/api/api');
// const dynamicRoutes = require('./routes/api/dynamic');
// const testRoutes = require('./routes/testing');
// const coffeeRoutes = require('./routes/coffee');
// const bookingsRoutes = require('./routes/api/bookings');
// const employeesRoutes = require('./routes/api/employees');
// const reservationsRoutes = require('./routes/api/reservations');
// const petRoutes = require('./routes/api/pets');
// const ownerRoutes = require('./routes/api/owners');
// const roomsRoutes = require('./routes/api/rooms');

const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

// body parsing middleware
app.use(express.json());

// use routes
// app.use('/api', apiRoutes);
// app.use('/api', testRoutes);
// app.use('/api/dynamic', dynamicRoutes);
// app.use('/coffee', coffeeRoutes);
// app.use('/api/bookings', bookingsRoutes);
// app.use('/api/employees', employeesRoutes);
// app.use('/api/reservations', reservationsRoutes);
// app.use('/api/rooms', roomsRoutes);
// app.use('/api/pets', petRoutes);
// app.use('/api/owners', ownerRoutes);

// server static assets if in production
console.log("running in: ", process.env.NODE_ENV || "development");
if (process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('mac-app/build'));
  
  app.get('*', (req, res) => {
    // res.sendFile('index.html');
    res.sendFile(path.join(__dirname, 'mac-app', 'build', 'index.html'));
  });
}

app.get('/chico', ((req, res) => {
  // console.log("Found Chico!!")
  // res.send(JSON.stringify("I am a small dog"))
  throw new Error("ha")
}))

app.get('*', (req, res) => {
  res.status(500).json({
    msg: 'Oops this page was not supposed to happen.'
  })
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}.`));
