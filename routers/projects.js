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







module.exports = router;