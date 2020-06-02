exports.seed = function(knex) {

      return knex('tasks').insert([
        {id: 1, task_desc: 'cloths in basket', task_notes:'',task_complete: true, project_id:1 },
        {id: 2, task_desc: 'cloths in washer', task_notes:'',task_complete: false, project_id:1},
        {id: 3, task_desc: 'cloths in dryer', task_notes:'',task_complete: false, project_id:1},
        {id: 4, task_desc: 'fill bucker', task_notes:'',task_complete: true, project_id:2 },
        {id: 5, task_desc: 'wash car', task_notes:'',task_complete: true, project_id:2},
        {id: 6, task_desc: 'dry car', task_notes:'',task_complete: true, project_id:2},
        {id: 7, task_desc: 'fill bucket', task_notes:'',task_complete: true, project_id:3 },
        {id: 8, task_desc: 'mop floor', task_notes:'',task_complete: false, project_id:3},
        {id: 9, task_desc: 'beer time', task_notes:'',task_complete: true, project_id:3}
      ]);
    }
