exports.seed = function(knex) {
    return knex('projects').truncate()
        .then(function() {
            return knex('projects').insert([
                { id: 1, project_name: 'BMI Calculator', project_description: 'Build using NodeJS .', project_completed: false },
                { id: 2, project_name: 'Boost Immune System', project_description: 'Take vitamins , take vitamins , take vitamins .', project_completed: true },
                { id: 3, project_name: 'Don\'t Go Mad', project_description: 'Meditate , pray , stay productive .', project_completed: false }
            ]);
        });
};