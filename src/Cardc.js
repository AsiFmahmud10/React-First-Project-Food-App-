import { useContext, useState } from "react"
import {ThemeContext} from "./Theme/ThemeContext"

const Cardc = ({data}) => {
     
     const [tgl,setTgl] = useState(false)
       

     const {globalTheme} = useContext(ThemeContext)

     const nutition = ()=>{
            let obj =data.nutrition.nutrients[0]
             return ( 
                        <div>{
                        Object.keys(obj).map((key)=>(  <div key={key}> {key.toUpperCase()} : {obj[key]} </div> ))}   
                        </div>
                   )

     }
    return ( 
        <div >
               <div className = "strip" 
               style={
                   {
                    background:globalTheme.surface,
                    color:globalTheme.color,
                    border:`2px solid ${globalTheme.border}`
                }
                } 
               onClick={()=>{setTgl(!tgl)}}>
                    <div className = "card">
                        <img src={data.image} alt=""/>
                    </div>
                    <div>
                        <h3>Title :{data.title}</h3>
                        <h5>asd</h5>
                    </div>

                </div>
                
               { tgl && (<div className = "enddiv">{nutition()}</div>) }
               


        </div>
     );
}
 
export default Cardc;