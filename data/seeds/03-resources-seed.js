exports.seed = function(knex) {
      return knex('resources').insert([
        {id: 1, resource_name: 'wash mit', resource_desc:' only the best for my whip'},
        {id: 2, resource_name: 'microfiber cloth', resource_desc:' no shamwow here'},
        {id: 3, resource_name: 'car wax', resource_desc:'no turtle'}
      ]);
    }
