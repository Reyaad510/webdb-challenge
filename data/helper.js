const knex = require('knex');

const config = require('../knexfile.js').development;
const db = knex(config);

const getProjects = () => {
    return db('projects');
}

const getProject = id => {
    return db('project').where({ id: Number(id) });
}


const addProject = project => {
    return db('project').insert(project);
}

const addAction = action => {
    return db('actions').insert(action);
}


module.exports = {
    getProjects,
    getProject,
    addProject,
    addAction
}