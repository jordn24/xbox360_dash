import express from "express"
import ProjectsCtrl from "./projects.controller.js"

const router = express.Router()

router.route("/").get(ProjectsCtrl.apiGetProjects)
router.route("/id/:id").get(ProjectsCtrl.apiGetProjectById)

router
    .route("/project")
    .post(ProjectsCtrl.apiPostProject)
    .put(ProjectsCtrl.apiUpdateProject)
    .delete(ProjectsCtrl.apiDeleteProject)

export default router