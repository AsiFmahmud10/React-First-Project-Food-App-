import { useContext } from "react";
import { Link } from "react-router-dom";
import {ThemeContext} from "./Theme/ThemeContext";



const Navbar = () => {
     const buttonStyle = {position:'absolute', right:'3px'}
     let currentTheme = 0
     const click=()=>{
         currentTheme =changeTheme()
         console.log(currentTheme,"huuu")
     }

     const {globalTheme, changeTheme } = useContext(ThemeContext)
     return ( 
        <>
        <nav className="navbar " style={{borderBottom :`1px solid ${globalTheme.border}`}}>
            <h1>KITCHEN</h1>
              
            <div>
               {new Date().toDateString()}
            </div>
            
        </nav>
        <button style={buttonStyle} onClick = {()=>click()}  >click</button>
        </>
    ); 
}
 
export default Navbar;

  



