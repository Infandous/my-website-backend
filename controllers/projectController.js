// controllers/projectController.js
const db = require('../models/db');

// Fetch all projects
const getProjects = (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if (err){
            return res.status(500).json({error: err.message});
        }
        res.json(results);
    });
};

// Add a new project
const addProject = (req, res) => {
    const {name, description, tech_stack, github_link} = req.body;
    db.query('INSERT INTO projects (name, description, tech_stack, github_link) VALUES (?, ?, ?, ?)',
        [name, description, tech_stack, github_link],
        (err, result) => {
            if (err){
                return res.status(500).json({error: err.message});
            }
            res.status(201).json({message: 'Project added successfully!'});
        });
};

module.exports = {
    getProjects,
    addProject,
};