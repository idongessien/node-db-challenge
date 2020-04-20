const express = require('express');

const projects = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    projects.getProjects()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get projects.' })
        });
});

router.get('/resources', (req, res) => {
    projects.getResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get resources.' })
        });
});

router.get('/tasks', (req, res) => {
    projects.getTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get tasks.' })
        });
});

router.post('/', (req, res) => {
    projects.getProjects()
        .then(project => {
            if (!req.body.project_name || req.body.project_completed) {
                res.status(400).json({ message: 'Not . Found .' })
            } else {
                projects.addProject(req.body)
                    .then(project => {
                        res.status(201).json({ message: 'Project Created .', project })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Sorry , failed to create project .' })
                    });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Yeahh , nope , our bad there .' })
        });
})

router.post('/resources', (req, res) => {
    projects.getResources()
        .then(resources => {
            if (!req.body.resource_name || !req.body.resource_description) {
                res.status(400).json({ message: 'Not . Found .' })
            } else {
                projects.addResources(req.body)
                    .then(resources => {
                        res.status(201).json({ message: 'Resource Created .', resources })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Not you , it was us .' })
                    });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'There was a glitch in the Matrix!' })
        });
})

router.post('/tasks', (req, res) => {
    projects.getTasks()
        .then(tasks => {
            if (req.body.task_completed) {
                res.status(400).json({ message: 'Not . Found .' })
            } else {
                projects.addTask(req.body)
                    .then(task => {
                        res.status(201).json({ message: 'Task created .', task })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Failed to create task .' })
                    });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Yeahh , nope , our bad there .' })
        });
})


module.exports = router;