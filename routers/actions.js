const router = require('express').Router();
const db = require('../data/helper.js');



router.get('/', async(req, res) => {
  try {
      const actions = await db.getActions();
      res.status(200).json(actions);
      } catch(error) {
          res.status(500).json({message: 'Error retreiving actions! Sorry :('})
  }
})


  // Add Action
router.post('/', async(req,res) => {
  const action = req.body;
  try {
    if(action.description && action.project_id) {
    const newAction = await db.addAction(action);
    res.status(201).json(newAction);
    } else {
        res.status(400).json({ message: 'Please provide project_id and description for your project!' })
    }
  } catch(error) {
      res.status(500).json({ message: 'We ran into an error creating the action. :('})
  }
})







module.exports = router;