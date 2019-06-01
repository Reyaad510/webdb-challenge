const router = require('express').Router();
const db = require('../data/helper.js');



// /api/projects
// Get Projects

router.get('/', async(req, res) => {
    try {
        const projects = await db.getProjects();
        res.status(200).json(projects);
        } catch(error) {
            res.status(500).json({message: 'Error retreiving projects! Sorry :('})
    }
})


// Add Project
router.post('/', async(req,res) => {
    const project = req.body;
    try {
      if(project.name && project.description) {
      const newProject = await db.addProject(project);
      res.status(201).json(newProject);
      } else {
          res.status(400).json({ message: 'Please provide name and description for your project!' })
      }
    } catch(error) {
        res.status(500).json({ message: 'We ran into an error creating the project. :('})
    }
})






module.exports = router;