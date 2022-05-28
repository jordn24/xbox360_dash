const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/projects', async (req, res) => {
    const projects = Schemas.Projects;

    const projectObj = await projects.find({}, (err, projectData) => {
        if (err) throw err;
        if (projectData) {
            res.end(JSON.stringify(projectData));
        } else {
            res.end();
        }
    }).clone().catch(function(err){ console.log(err) })
});

router.get('/projectById', async (req, res) => {
    const projects = Schemas.Projects

    const proejctObj = await projects.find({ _id: req.query.id}, (err, projectData) => {
        if (err) throw err;
        if (projectData) {
            res.end(JSON.stringify(projectData));
        } else {
            res.end();
        }  
    }).clone().catch(function(err){ console.log(err) })
});

module.exports = router;