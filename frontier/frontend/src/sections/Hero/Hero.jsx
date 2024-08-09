import React from 'react'
import styles from './HeroStyles.module.css'
import aniImg from '../../assets/wbg4-removebg-preview.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import instaLight from '../../assets/insta-icon.png'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/anirudh_resume_2024.pdf'
import {useTheme} from '../../common/ThemeContext'
import "./HeroStyles.module.css"

function Hero() {
    // Hero
    const {theme, toggleTheme} = useTheme()
    console.log(theme)
    const themeIcon = theme==='light'? sun: moon
    const  linkedinIcon= theme==='light'? linkedinLight: linkedinDark
    const instagramIcon = theme==='light'? instaLight: instaLight
    const githubIcon = theme==='light'? githubLight: githubDark

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.colorMode}src={themeIcon} alt="theme color icon" onClick={toggleTheme}></img>
            <img className={styles.ani}src={aniImg} alt="Profile pic of Anirudh P K"></img>
            
        </div>
        <div className={styles.info}>
            <h1>Anirudh P K<br/></h1>
            <h2>Dev</h2>
            <span>
                <div>
                <a href="https://www.linkedin.com/in/anirudh-parsi-kamalakar" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon"></img>
                </a>
                <a href="https://www.instagram.com/ani_the_one/" target="_blank">
                    <img src={instagramIcon} alt="Instagram icon"></img>
                </a>
                <a href="https://github.com/anirudhpk01" target="_blank">
                    <img src={githubIcon} alt="Github icon"></img>
                </a>
                </div>
                <p className={styles.description}>Hello , I am Anirudh,and I am a developer</p>
                <a href={CV} download>
                    <button className='hover'>Resume</button>
                </a>
                
            </span>
            
        </div>
    </section>
  )
}

export default Hero