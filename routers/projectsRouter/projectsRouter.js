const express = require('express');

const db = require('../../data/db-config');

const router = express.Router();

//get all projects
router.get('/', async (req,res)=>{
    try{
        const projects = await db.select('*').from('projects');
        if(projects.length === 0){
            res.status(200).json({message:"there are no projects in the database"})
        }else{
            res.status(200).json(projects)
        }
    }catch(err){
        res.status(500).json({mesasge:"error in getting projects", reason:err.message})
    }
})

// add a new project
router.post('/', async (req,res) =>{
    const project = req.body;
    try{
        if(!project){
            res.status(400).json({message:"project data needed"})
        }else if(!project.project_name){
            res.status(400).json({mesasge:"project name needed"})
        }else{
            await db('projects').insert(project);
            res.status(201).json({mesasge:"project successfully added", project})
        }
    }catch(err){
        res.status(500).json({mesage:"error in adding project to database", reason:err.message})
    }
})

//get all tasks
router.get('/tasks', async (req,res) =>{
    try{
        const tasks = await db.select('*').from('tasks')
        if(tasks.length === 0 ){
            res.status(400).json({mesasge:"there are no tasks"})
        }else{
            res.status(200).json(tasks);
        }
    }catch(err){
        res.status(500).json({mesasge:"error in getting tasks from database",reason:err.mesage})
    }
})

//get tasks for specific project
router.get('/:id/tasks', async (req,res) =>{
    const {id} = req.params;
    try{
        const tasks = await db('tasks as T').join('projects as P', 'P.id', 'T.project_id').select('P.project_name','P.project_desc','T.id', 'T.task_desc').orderBy('T.id').where({project_id: id});
        
        if(tasks.length){
            res.status(200).json(tasks)
        }else{
            res.status(404).json({message:"there are no tasks for this project"})
        }
    }catch(err){
        res.status(500).json({message:"error in getting task list from database", reason:err.message})
    }
})

//add a task for a specific project
router.post('/:id/tasks', async (req,res) =>{
    const {id} = req.params;


})

module.exports = router;