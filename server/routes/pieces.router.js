
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()){
        console.log('in GET route to get all items on shelf');
        console.log('user', req.user);
        let queryText = `SELECT * FROM "pieces"`;
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
 * POST route template
 */
router.post('/', (req, res) => {
    if (req.isAuthenticated()){
        console.log('this is req.body:', req.body);
        const queryText = `INSERT INTO "pieces" ("project_id","name","image_url","description")
        VALUES($1, $2, $3, $4)`;
        pool.query(queryText, [
            req.body.project_id,
            req.user.name,
            req.body.image_url,
            req.body.description
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
module.exports = router;