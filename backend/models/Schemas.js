const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    projectTitle: {type:String, required:true},
    technology: {type: String, required: true},
    link: {type: String, required: true},
    date: {type: Date, default:Date.now},
    description: {type: String, required: true},
    tech_image: {type: String, required: true},
    technologiesDesc: {type: String, required: true},
    thumbnail: {type: String, required: true},
})

const Projects = mongoose.model('users', projectSchema, 'projects');

const mySchemas = {'Projects':Projects};

module.exports = mySchemas;