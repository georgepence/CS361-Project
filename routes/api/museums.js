const express = require('express');
const router = express.Router();
const queryDB = require('../../database/dbcon');

const app = express();
// app.use(express.urlencoded({ extended: false }));  // TODO ?

//  --------------- Get all museums, with selected fields ---------------------

router.get('/', async (req, res) => {
  const fields = 'museumId, name, smallPicture, largePicture';
  
  await queryDB(`select ${fields} from Museums`)
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