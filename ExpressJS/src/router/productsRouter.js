const express = require('express');
const projectsRouter = express.Router();
const projects = require('../data/projects.json');

projectsRouter.route("/:id").get((req,res) => {
    const id = req.params.id;
    res.render("project", {project: projects[id]})
})
projectsRouter.route("/").get((req,res) => {
    res.render('projects',{projects});
}) // .route is the method to set the path of the middleware

module.exports = projectsRouter;