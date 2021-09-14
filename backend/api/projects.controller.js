import ProjectsDAO from "../dao/projectsDAO.js";

export default class ProjectsController {
    static async apiGetProjects(req, res, next) {
        const projectsPerPage = req.query.projectsPerPage ? parseInt(req.query.projectsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0
    
        let filters = {}
        if (req.query.projectTitle) {
          filters.projectTitle = req.query.projectTitle
        } else if (req.query.technology) {
          filters.technology = req.query.technology
        } 
    
        const { projectsList, totalNumProjects } = await ProjectsDAO.getProjects({
          filters,
          page,
          projectsPerPage,
        })
    
        let response = {
          projects: projectsList,
          page: page,
          filters: filters,
          entries_per_page: projectsPerPage,
          total_results: totalNumProjects,
        }
        res.json(response)
      }

    static async apiGetProjectById(req, res, next) {
      try {
        let id = req.params.id || {}
        let project = await ProjectsDAO.apiGetProjectById(id)

        if (!project) {
          res.status(404).json({ error: "Not found"})
          return
        }
        res.json(project)
       } catch (e) {
         console.log(`api, ${e}`)
         res.status(500).json({ error: e})
       }
    }

    static async apiPostProject(req, res, next) {
      try {
        const projectTitle = req.body.projectTitle
        const technology = req.body.technology
        const link = req.body.link
        
        const date = new Date()

        const ProjectResponse = await ProjectsDAO.addProject(
          projectTitle,
          technology,
          link,
          date,
        )
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })        
      }
    }

    static async apiUpdateProject(req, res, next) {
      try {
        const id = req.body.id
        const projectTitle = req.body.projectTitle
        const technology = req.body.technology
        const link = req.body.link
        
        const ProjectResponse = await ProjectsDAO.updateProject(
          id,
          projectTitle,
          technology,
          link,
        )

        var { error } = ProjectResponse
        if (error) { 
          res.status(400).json({error})
        }
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
            
    }

    static async apiDeleteProject(req, res, next) {
      try {
        const projectId = req.query.id
        const userId = req.body.user_id
        console.log(projectId)
        const projectResponse = await ProjectsDAO.deleteProject(
          projectId,
        )
        res.json({ status: "success"})
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
    }

      
}