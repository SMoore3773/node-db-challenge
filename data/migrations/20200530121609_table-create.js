
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl =>{
    tbl.increments('id');
    tbl.string('project_name').notNullable();
    tbl.string('project_desc');
    tbl.boolean('project_complete').defaultTo(false);
  })

  .createTable('resources', tbl =>{
    tbl.increments('id');
    tbl.string('resource_name').notNullable();
    tbl.string('resource_desc');
  })

  .createTable('tasks', tbl =>{
    tbl.increments('id');
    tbl.string('task_desc').notNullable();
    tbl.string('task_notes');
    tbl.boolean('task_complete').defaultTo(false);
    tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })

  .createTable('project-resources', tbl =>{
    tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.integer('resource_id')
        .notNullable()
        .unsigned()
        .references('resources.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.primary(['project_id','resource_id'])
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project-resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
