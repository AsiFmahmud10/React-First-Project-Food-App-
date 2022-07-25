import { createContext, useState } from "react"
import {theme} from './theme'

export const ThemeContext = createContext(theme[0])

const ThemeContextProvider = (props) => {
     
     const [globalTheme,setGlobalTheme] = useState(theme[0])
  
      const changeTheme=()=>{

        console.log(globalTheme.id)
         setGlobalTheme(theme[globalTheme.id])
         
         return globalTheme.id
        }
   
    return ( 
        
            <ThemeContext.Provider value = {{globalTheme,changeTheme}}>
                  <div className="contain" style={{ 
                  background:globalTheme.background,
                  color:globalTheme.color,}
                  }>
                     {props.children}
                  </div>
            </ThemeContext.Provider>

       
     );
}


 
export default ThemeContextProvider;