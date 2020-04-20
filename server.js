const express = require('express');
const server = express();
const projectRouter = require('../routes/projectRoutes');

server.use(express.json());
server.use('/api/projects', projectRouter)
server.get("/", (req, res) => {
    res.send("<h2>Def Worst Than Redux !</h2>");
});

module.exports = server;