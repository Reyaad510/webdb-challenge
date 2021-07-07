

exports.seed = async function(knex) {
  await knex('projects').insert([
    { id: 1, name: 'BlackHole Project', description: 'Create an app that will suck up the notes!', completed: true },
    { id: 2, name: 'React/Redux Project', description: 'Create a project using React and Redux!', completed: false }
  ])
};

