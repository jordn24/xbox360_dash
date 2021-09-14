import { text } from "express"
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let projects

export default class ProjectsDAO {

    static async injectDB(conn){
        if (projects){
            return
        }
        try {
            projects = await conn.db(process.env.MYPORTFOLIO_NS).collection("projects")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in projectsDAO: ${e}`,
            )
        }
     }

    static async getProjects({
         filters = null,
         page = 0,
         projectsPerPage = 6
         
     } = {}) {
         let query
         if (filters) {
             if ("projectTitle" in filters) {
              query = { $text: { $search: filters["projectTitle"]}}
             } else if ("technology" in filters) {
              query = { "technology": { $eq: filters["technology"]}}
             }
         }

         let cursor

         try {
             cursor = await projects.find(query)
         } catch (e) {
             console.error(`Unable to issue find command, ${e}`)
             return {projectsList: [], totalNumProjects: 0}
         }

         const displayCursor = cursor.limit(projectsPerPage).skip(projectsPerPage * page)

         try {
             const projectsList = await displayCursor.toArray()
             const totalNumProjects =  await projects.countDocuments(query)

             return { projectsList, totalNumProjects}
         } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { projectsList: [], totalNumProjects: 0}
         }
     }

    static async addProject(projectTitle, technology, link, date) {
        try {
            const projectDoc = { 
                projectTitle: projectTitle, 
                technology: technology,
                link: link,
                date: date,
            }
            return await projects.insertOne(projectDoc)
        } catch (e) {
            console.error(`Unable to post review: {e}`)
            return { error: e }
        }
    }

    static async updateProject(id ,projectTitle, technology, link) {
        try {
            const updateResponse = await projects.updateOne(
                { _id: ObjectId(id)},
                { $set: { projectTitle: projectTitle, technology: technology, link: link}}
            )

            return updateResponse
        } catch (e) {
            console.error(`Unable to post review: {e}`)
            return { error: e }
        }
    }

    static async deleteProject(id) {
        try {
            const deleteResponse = await projects.deleteOne({ _id: ObjectId(id)})
            console.log(id)
            return deleteResponse
        } catch (e) {
            console.error(`Unable to post review: {e}`)
            return { error: e }
        }
    }
}