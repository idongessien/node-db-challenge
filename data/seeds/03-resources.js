exports.seed = function(knex) {
    return knex('resources').truncate()
        .then(function() {
            return knex('resources').insert([
                { id: 1, resource_name: 'Laptop', resource_description: 'Go review the TK , all of them .' },
                { id: 2, resource_name: 'Phone', resource_description: 'Galaxy over iPhone !' },
                { id: 3, resource_name: 'Also Phone', resource_description: 'Do not forget to check in w Momma !' }
            ]);
        });
};