import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import React from 'react'
import {useTheme} from '../src/common/ThemeContext'
import sun from './assets/sun.svg'
import moon from './assets/moon.svg'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'


import './App.css'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    
    <Hero/>
    <Projects/>
    <Skills />
    <Contact/>
    <Footer/>
     
      
    </>
  )
}

export function Appbar(){
  const {theme, toggleTheme} = useTheme()
    console.log(theme)
    const themeIcon = theme==='light'? sun: moon
  
  return <div style={{ textAlign: "center", display: "flex", justifyContent: "right", position: "fixed"}}>
    
    <img style={{width: "25px", margin: "10px"}}src={themeIcon} alt="theme color icon" onClick={toggleTheme}></img>
      
    </div>

}
export default App
