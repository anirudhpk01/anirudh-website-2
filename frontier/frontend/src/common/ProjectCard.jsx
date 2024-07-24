import React from 'react'

function ProjectCard({src, link ,heading , descr}) {
  return (
    <a href={link} target="_blank">
            <img className='hover' src={src} alt="water image"></img>
            <h3>{heading}</h3>
            <p style={{maxWidth: "80ch"}}>{descr}</p>
            </a>
  )
}

export default ProjectCard