import { useState,createContext } from "react";
import Dashboard from "./dashboard";
import ToggleButton from "./toggleButton";
 
 const ThemeContext = createContext(null)

 const ToogleMode = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    }
    return(
        <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div  id={theme}>
               <Dashboard/>
                <div className="switch-mode">
                  <ToggleButton isToggled={theme === 'dark'} onToggle={toggleTheme}/>
                </div>
              
            </div>
        </ThemeContext.Provider>
        
        </>
    )
 }

 export default ToogleMode