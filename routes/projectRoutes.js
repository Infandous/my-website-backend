// routes/projectRoutes.js

const express = require('express');
const router = express.Router();
const {getProjects, addProject} = require('../controllers/projectController');

// Define routes
router.get('/', getProjects); //get all projects
router.post('/', addProject); //post a new project

module.exports = router;