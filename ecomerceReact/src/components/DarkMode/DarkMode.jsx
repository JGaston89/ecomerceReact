import { useEffect, useState } from 'react'
import LightButton from "../../assets/img/day-mode.png"
import DarkButton from "../../assets/img/night-mode.png"


function  DarkMode () {
    const [theme, setTheme] = useState("light")
    
    useEffect(()=>{
        if(theme == "dark"){
            document.querySelector('html').classList.add('dark')
        }else{
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])
    const hangleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == "light" ? "dark" : "light" )
    }

  return (
    <div className='relative'>
        <img 
            onClick={hangleChangeTheme}
            src={LightButton} alt="" 
            className={`w-12 cursor-pointer absolute right-0 z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
        />
        <img 
            onClick={hangleChangeTheme}
            src={DarkButton} alt="" 
            className={`w-12 cursor-pointer`}
        />
    </div>
  )
}

export default DarkMode
