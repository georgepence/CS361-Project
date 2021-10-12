const express = require('express');
const router = express.Router();
const queryDB = require('../../database/dbcon');
const { query } = require('express');

var app = express();
app.use(express.urlencoded({ extended: false }));

//  --------------- Get all museums, with selected fields ---------------------

router.get('/', async (req, res) => {
  const fields = 'museumId, name';
  await queryDB(`select ${fields} from Museums`)
      .then(result => {
        console.log(result)
        res.json(result)
      })
      .catch(err => res.send(err.sqlMessage))
  
});

module.exports = router;