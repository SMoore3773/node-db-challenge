exports.seed = function(knex) {
      return knex('projects').insert([
        {id: 1, project_name: 'laundry', project_desc:'clean cloths', project_complete:false},
        {id: 2, project_name: 'carwash', project_desc:'clean car', project_complete:true},
        {id: 3, project_name: 'mop floor', project_desc:'clean floor', project_complete:false}
      ]);
    };
