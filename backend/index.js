import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import ProjectsDAO from "./dao/projectsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.MYPORTFOLIO_DB_URI,
    {
        maxPoolSize: 50
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await ProjectsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})