
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    console.log(req.params.id);
    console.log('in GET route to get all spec pieces');
    if (req.isAuthenticated()){
        let queryText = `select pieces.*, store.price, store.forsale FROM pieces left join store on pieces.id = store.pieces_id where pieces.id=$1;`;
        pool.query(queryText,[req.params.id]).then((result) => {
            res.send(result.rows[0]);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()){
        console.log('in GET route to get all pieces');
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
            req.body.name,
            req.body.image_url,
            req.body.description
        ]).then((result) => {
            console.log('back from db with:', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in POST pieces', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    } 
});

router.delete('/:id', (req, res) => {
    if(req.isAuthenticated()){
        queryText = 'DELETE FROM store where pieces_id = $1;';
        pool.query(queryText, [req.params.id]).then(result => {
            queryText = 'DELETE FROM pieces where id = $1;';
            pool.query(queryText, [req.params.id]).then(result => {
                res.sendStatus(200);
            }).catch(error => {
                console.log('Error handling DELETE pieces ', error);
                res.sendStatus(500)
            });
        })
        .catch(error => {
            console.log('Error handling DELETE pieces ', error);
            res.sendStatus(500)
        });
    } else {
        res.sendStatus(403);
    }
});
router.put('/:id', (req, res)=>{
    const queryText = `UPDATE pieces SET project_id=$1,name=$2,image_url=$3,description=$4 WHERE id=$5`;
    pool.query(queryText, [req.body.project_id,
        req.body.name,
        req.body.image_url,
        req.body.description,
        req.body.id
    ]).then(result=>{
        res.sendStatus(200);
    }).catch(error=>{
        console.log('Error handling PUT pieces', error);
        res.sendStatus(500);
    });
});
module.exports = router;
