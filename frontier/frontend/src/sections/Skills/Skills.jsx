import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList skill='HTML' src={checkMarkIcon}/>
            <SkillList skill='CSS' src={checkMarkIcon}/>
            <SkillList skill='Javascript' src={checkMarkIcon}/>
            <SkillList skill='React' src={checkMarkIcon}/>
            <SkillList skill='Node' src={checkMarkIcon}/>
            
            </div>
            <hr/>
            <div className={styles.skillList}>
            <SkillList skill='C' src={checkMarkIcon}/>
            <SkillList skill='C++' src={checkMarkIcon}/>
            <SkillList skill='Python' src={checkMarkIcon}/>
            <SkillList skill='MongoDB' src={checkMarkIcon}/>
            <SkillList skill='Express' src={checkMarkIcon}/>
            
            </div>
            <hr/>
            <div className={styles.skillList}>
            <SkillList skill='Recoil' src={checkMarkIcon}/>
            <SkillList skill='Github' src={checkMarkIcon}/>
            <SkillList skill='ARM Assembly' src={checkMarkIcon}/>
            <SkillList skill='Flask' src={checkMarkIcon}/>
            <SkillList skill='Git' src={checkMarkIcon}/>
            


          
            
        </div>
    </section>
  )
}

export default Skills