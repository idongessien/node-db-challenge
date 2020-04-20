exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name').notNullable();
            tbl.string('project_description');
            tbl.boolean('project_completed').defaultTo(false).notNullable();
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.integer('project_id').references('id').inTable('projects');
            tbl.string('task_description').notNullable();
            tbl.string('task_notes');
            tbl.boolean('task_completed').defaultTo(false).notNullable();
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name').notNullable();
            tbl.string('resource_description');
        })
        .createTable('project_resources', tbl => {
            tbl.integer('project_id').notNullable().references('id').inTable('projects')
            tbl.integer('resource_id').notNullable().references('id').inTable('resources')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('project_resources')
};