

exports.seed = async function(knex) {
  await knex('actions').insert([
    { id: 1, description: 'Schema for Blackhole', notes: 'Some extra stuff', completed: true, project_id: 1 },
    { id: 2, description: 'Backend CRUD endpoints', notes: 'I like notes', completed: true, project_id: 2 }
  ])
};