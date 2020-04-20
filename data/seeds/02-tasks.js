exports.seed = function(knex) {
    return knex('tasks').truncate()
        .then(function() {
            return knex('tasks').insert([
                { id: 1, task_description: 'Meet MVP', task_notes: 'I could do better !', task_completed: false, project_id: 1 },

                { id: 2, task_description: 'Walk Bella', task_notes: 'My dog is staring at me .', task_completed: true, project_id: 2 },

                { id: 3, task_description: 'Feed Bella', task_notes: 'My dog is still staring at me !', task_completed: false, project_id: 3 }
            ]);
        });
};