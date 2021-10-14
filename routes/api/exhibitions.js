const express = require('express');
const router = express.Router();
const queryDB = require('../../database/dbcon');
const { query } = require('express');

var app = express();
app.use(express.urlencoded({ extended: false }));

//  --------------- Get all museums, with selected fields ---------------------

router.get('/', async (req, res) => {
  console.log("Request Query = ", req.query.query)
  await queryDB(req.query.query)
      .then(result => {
        console.log("In server exhibitions", result)
        res.json(result)
      })
      .catch(err => {
        console.log("In server exhibitions, error here!", err.sqlMessage)
        res.json(err.sqlMessage)})
});

module.exports = router;