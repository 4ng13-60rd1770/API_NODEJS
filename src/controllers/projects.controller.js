import Project from '../models/Projects'

export const createProject = async (req, res)=> {
const {name, description} = req.body
const newProject = new Project({name, description});

const projectSaved = await newProject.save()

res.status (201).json (projectSaved)

}
export const getProjects = async (req, res)=> {

const projects = await Project.find();
res.json(projects)
}
export const getProjectById = async (req, res)=> {
   const project = await Project.findById(req.params.projectId);
   res.status(200).json(project)
}
export const updateProjectById = async (req, res)=> {
    const updateProject = await Project.findByIdAndUpdate (req.params.projectId, req.body,{
        new: true

    })
     
    res.status(200).json(updateProject)

    
}

export const deleteProjectById = async (req, res)=> {
const {projectId} = req.params;
await Project.findByIdAndDelete (projectId)
res.status (204).json();

    
}