const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log('In shelf router GET')
  let query = `SELECT * from "item";`
  pool.query(query)
    .then((response)=>{
      console.log(response.rows)
      res.send(response.rows)
    })
    .catch((dbError)=>{
      res.send(dbError)
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
 router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    const sqlQuery = `INSERT INTO "item"
    ("description", "image_url", "user_id")
    VALUES
    ($1, $2,$3);`
    
    
    const sqlValues = [
      req.body.description,
      req.body.image_url,
      req.user.id
    ]
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.sendStatus(201)
      })
      .catch((dbErr) => {
        res.sendStatus(500)
      })
  } else {
    res.sendStatus(401)
  }
})


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

  console.log(req)
  const queryText = `DELETE FROM item 
	WHERE id=$1 
		AND user_id =$2;`;
  pool.query(queryText, [req.params.id, req.user.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
