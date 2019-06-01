

// Project Table
exports.up = async function(knex) {

  await knex.schema.createTable('projects', (tbl) => {
      tbl.increments('id')
      tbl.string('name').notNullable()
      tbl.string('description').notNullable()
      tbl.boolean('completed')
  })

  // Actions Table
  await knex.schema.createTable('actions', (tbl) => {
      tbl.increments('id')
      tbl.string('description').notNullable()
      tbl.string('notes')
      tbl.boolean('completed')
      tbl
        .integer('project_id')
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('actions')
  await knex.schema.dropTableIfExists('projects')
};
