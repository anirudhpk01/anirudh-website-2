import React from 'react'
import styles from "./ProjectsStyles.module.css"
import Waterr from "../../assets/water-conservation.jpg"
import ProjectCard from '../../common/ProjectCard'
import cleanspace from '../../assets/cleanspace.jpg'
import projfind from '../../assets/projectsfinder.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
        <ProjectCard src={projfind} link='https://github.com/ANANTH-SWAMY/projfind/' heading='Projfind' descr='ProjFind is a project collaboration platform designed to assist university students in finding projects to
collaborate on with other students.' />
            
            <ProjectCard src={cleanspace}link='https://github.com/Icarus131/CleanSpace' heading='CleanSpace' descr='Implemented a blockchain based web app that rewards citizens who clean the city and participate in cleaning
drives, with crypto tokens whose value increases with more people collaborating to clean up the city.Social
service enforced by a new gen incentive was our vision' />
<ProjectCard src={Waterr} link='https://github.com/AnaghaV17/Water-conservation-Terrathon' heading='Detecting Algal Blooms for Water Conservation Using ML' descr='Developed a full-stack web app that predicts harmful algal blooms in water bodies using IoT data. The app provides a detailed report on algal bloom risk, water potability, and quality index, leveraging multiple ML models such as Random Forest Regressors.'/>

        </div>
    </section>
  )
}

export default Projects