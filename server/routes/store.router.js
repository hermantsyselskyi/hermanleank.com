
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()){
        console.log('in GET route to get all store');
        let queryText = `select store.*, pieces.description, pieces.image_url, pieces.name, pieces.project_id FROM store join pieces on pieces.id = store.pieces_id;`;
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
    console.log('IN post');
    if (req.isAuthenticated()){
        console.log('this is req.body:', req.body);
        const queryText = `INSERT INTO "store" ("pieces_id","price","forsale")
        VALUES($1, $2, $3)`;
        pool.query(queryText, [
            req.body.pieces_id,
            req.body.price,
            req.body.forsale
        ]).then((result) => {
            console.log('back from db with:', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in POST store', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    } 
});
router.delete('/:id', (req, res) => {
    if(req.isAuthenticated()){
    queryText = 'DELETE FROM store where id = $1;';
    pool.query(queryText, [req.params.id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error handling DELETE store ', error);
        res.sendStatus(500)});
    } else {
        res.sendStatus(403);
    }
});

router.put('/:id', (req, res)=>{
    const queryText = `UPDATE store SET price=$1,forsale=$2 WHERE pieces_id=$3`;
    pool.query(queryText, [
        req.body.price,
        req.body.forsale,
        req.body.id
    ]).then(result=>{
        res.sendStatus(200);
    }).catch(error=>{
        console.log('Error handling PUT store', error);
        res.sendStatus(500);
    });
});

module.exports = router;
