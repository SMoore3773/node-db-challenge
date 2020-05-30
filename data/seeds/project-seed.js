
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'laundry', project_desc:'clean cloths', project_complete:false},
        {id: 1, project_name: 'carwash', project_desc:'clean car', project_complete:true},
        {id: 1, project_name: 'mop floor', project_desc:'clean floor', project_complete:false}
      ]);
    });
};
