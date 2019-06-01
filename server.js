const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./routers/projects.js');
const actionsRouter = require('./routers/actions.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);


server.get('/', (req, res) => {
  res.status(200).json({ message: "Hi!" });
});

module.exports = server;