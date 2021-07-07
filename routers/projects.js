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


// Get Project By ID

router.get('/:id', async (req,res) => {
    try {
    const project = await db.getProject(req.params.id);
    if(project) {
        res.status(200).json(project)
    } else {
        res.status(404).json({ message: 'Couldn not find specific project :(' })
    }
}    catch(error) {
    res.status(500).json({message: 'Error retreiving Project :('})
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