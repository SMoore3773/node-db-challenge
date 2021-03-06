const express = require('express');

const resourceRouter = require('./routers/resourcesRouter/resourcesRouter');
const projectsRouter = require('./routers/projectsRouter/projectsRouter');


const server = express();

server.use(express.json());

server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectsRouter);

server.get('/', (req,res)=>{
    res.status(200).json({message:"api is running"})
})
module.exports = server;