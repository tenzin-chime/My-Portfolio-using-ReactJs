import React from 'react'

function ProjectCard() {
  return (
                <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                    {project.skills.map((skill,id)=>{
                        <li key={id}>{skill}</li>;
                    })}
                </ul>
                <div>
                <a href={project.demo}>Demo</a>
                <a href={project.source}>Source</a>
                </div>
                </div>
  )
}

export default ProjectCard