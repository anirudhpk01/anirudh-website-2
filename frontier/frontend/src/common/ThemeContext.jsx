import React, {createContext, useContext, useState, useEffect, useRef} from "react"

const ThemeContext = createContext()
export const useTheme= ()=> useContext(ThemeContext)
export const ThemeProvider=({children})=>{

    const prevTheme = useRef(0)
    
    
    const [theme, setTheme] = useState( localStorage.getItem('theme') ||  'light') 
    if(theme=='light'){
        prevTheme.current=0
    }
    prevTheme.current=1
   
    
    useEffect(()=>{

        document.body.setAttribute('data-theme',theme)
        localStorage.setItem('theme',theme)
    },[theme])

    const toggleTheme = ()=>{
        
        console.log("Theme switched!")
        console.log(theme)
        if(theme=='dark'){
        setTheme('light')}
        else{
            setTheme('dark')
        }
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
 }

 //usage of context is like declaring something globally, but only for those components which are called within this global component,
 //and whatever the object you createContext right , that will be the provider that is returned
 //like ex: Contextobj.Provider and value will be some variable/statevariable that will be needed for some internal components
 //and the function useTheme here whichis a functionwith useContext(contextobj), will be needed to be called in an internal component