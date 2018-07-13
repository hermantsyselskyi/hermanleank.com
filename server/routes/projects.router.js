
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()){
        console.log('in GET route to get all projects');
        console.log('user', req.user);
        let queryText = `SELECT * FROM "projects"`;
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
        const queryText = `INSERT INTO "projects" ("year","projectname","bg_url","description")
        VALUES($1, $2, $3, $4)`;
        pool.query(queryText, [
            req.user.year,
            req.body.projectname,
            req.body.bg_url,
            req.body.description
        ]).then((result) => {
            console.log('back from db with:', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in POST projects', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    } 
});

router.delete('/:id', (req, res) => {
    if(req.isAuthenticated()){
    queryText = 'DELETE FROM projects where id = $1;';
    pool.query(queryText, [req.params.id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error handling DELETE projects ', error);
        res.sendStatus(500)});
    } else {
        res.sendStatus(403);
    }
});
module.exports = router;
