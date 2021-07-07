const knex = require('knex');

const config = require('../knexfile.js').development;
const db = knex(config);



// Projects

const getProjects = () => {
    return db('projects');
}


// Below making copy of initial project and then inserting project_id to clone to display the actions for that project
const getProject = async id => {
    const project = await db('projects').where({ id: Number(id) });
    const actions = await db('actions').where({project_id: id});
    const newProject = {...project[0]};
    newProject.actions = actions;

    if(newProject) {
        return newProject
    } else {
        return null
    }
}


const addProject = project => {
    return db('projects').insert(project);}



// Actions

const getActions = () => {
    return db('actions');
}

const addAction = action => {
    return db('actions').insert(action);
}


module.exports = {
    getProjects,
    getProject,
    addProject,
    addAction,
    getActions
}