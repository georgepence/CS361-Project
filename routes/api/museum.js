const express = require('express');
const router = express.Router();
const queryDB = require('../../database/dbcon');
const { query } = require('express');

var app = express();
app.use(express.urlencoded({ extended: false }));

//  --------------- Get all museums, with selected fields ---------------------

router.get('/', async (req, res) => {
  const fields = 'museumId, name, smallPicture';
  
  console.log('In api/museums', query)
  await queryDB(req.query.query)
      .then(result => res.json(result))
      .catch(err => {
        if (err.sqlMessage) {
          res.json({"success": false, "sqlMessage": err.sqlMessage})
        } else {
          res.json({"success": false})
        }
      })
  
});

module.exports = router;