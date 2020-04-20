const db = require('../data/config');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResources,
    addTask
}

function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function getTasks() {
    return db('projects')
        .join('tasks', 'projects.id', 'tasks.project_id')
        .select('tasks.id', 'projects.project_name', 'projects.project_description', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed');
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => ({ id: ids[0] }))
}

function addResources(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => ({ id: ids[0] }))
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(ids => ({ id: ids[0] }))
}