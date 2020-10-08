const express = require('express');

const db = require('../../data/db-config');

const router = express.Router();

router.get('/', async (req,res)=>{

    try{

        const resources = await db('resources').select('*')

        if(resources.length === 0 ){
                res.status(400).json({message:"there are no reources"})
        }else{
            res.status(200).json(resources)
        }

    }catch(err){
        res.status(500).json({message:"error in getting resources", reason:err})
    }

})


router.post('/',async (req,res)=>{
    const resource = req.body;

    try{
        if(!resource){
            res.status(400).json({message:"resource needed to post resource"})
        }else if(!resource.resource_name){
            res.status(400).json({message:"resource_name needed to post resource"})
        }else{
            await db('resources').insert(resource);
            res.status(201).json({message:"resource added successfully", resource})
        }
    }catch(err){
        res.status(500).json({message:"error in posting resources", reason:err})
    }
})


module.exports = router;