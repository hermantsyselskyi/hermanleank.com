const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const userCount = [];
/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()){
        console.log('in GET route to get all items on shelf');
        console.log('user', req.user);
        let queryText = `SELECT * FROM "item"`;
        pool.query(queryText).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    if (req.isAuthenticated()){
        console.log('this is req.body:', req.body);
        const queryText = `INSERT INTO "item" ("description", "image_url", "person_id")
        VALUES($1, $2, $3)`;
        pool.query(queryText, [
            req.body.description,
            req.body.image_url,
            req.user.id
        ]).then((result) => {
            console.log('back from db with:', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in POST', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    } 
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    if(req.isAuthenticated()){
    queryText = 'DELETE FROM item where id = $1;';
    pool.query(queryText, [req.params.id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error handling DELETE for /api/shelf: ', error);
        res.sendStatus(500)});
    } else {
        res.sendStatus(403);
    }
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
      if (req.isAuthenticated()){
        const queryText = `SELECT person.id as id, person.username as username,
         count(item.person_id) as total from item right join person on person.id  = item.person_id
         group by person.id;`;
        pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error handling router.get.count.',error);
            res.sendStatus(500);
        })
      }
      else{
        res.sendStatus(500);
      }
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;
// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//     if (req.isAuthenticated()){
//         console.log('in GET route to get all items on shelf');
//         console.log('user', req.user);
//         let queryText = `SELECT * FROM "pieces"`;
//         pool.query(queryText).then((result) => {
//             res.send(result.rows);
//         }).catch((error) => {
//             console.log(error);
//             res.sendStatus(500);
//         })
//     } else {
//         res.sendStatus(403);
//     }
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//     if (req.isAuthenticated()){
//         console.log('this is req.body:', req.body);
//         const queryText = `INSERT INTO "pieces" ("project_id","name","image_url","description")
//         VALUES($1, $2, $3, $4)`;
//         pool.query(queryText, [
//             req.body.project_id,
//             req.user.name,
//             req.body.image_url,
//             req.body.description
//         ]).then((result) => {
//             console.log('back from db with:', result);
//             res.sendStatus(200);
//         }).catch((error) => {
//             console.log('error in POST', error);
//             res.sendStatus(500);
//         })
//     } else {
//         res.sendStatus(403);
//     } 
// });

// router.delete('/:id', (req, res) => {
//     if(req.isAuthenticated()){
//     queryText = 'DELETE FROM item where id = $1;';
//     pool.query(queryText, [req.params.id]).then(result => {
//         res.sendStatus(200);
//     }).catch(error => {
//         console.log('Error handling DELETE for /api/shelf: ', error);
//         res.sendStatus(500)});
//     } else {
//         res.sendStatus(403);
//     }
// });
// module.exports = router;
