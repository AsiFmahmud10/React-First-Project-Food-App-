import { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import {ThemeContext} from "./Theme/ThemeContext"

const Cardc = ({data}) => {
     
     const [tgl,setTgl] = useState(false)
       const history = useHistory()

     const {globalTheme} = useContext(ThemeContext)
     let _link = `./Recipe`
     
     const nutition = ()=>{
        console.log(data,"____")
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
                    <div className = "card" style={{border:`1px solid whitesmoke`}}>
                        <img src={data.image} alt=""/>
                    </div>
                    <div>
                        <div style={{display:'flex',paddingLeft:'30px'}}> 
                               <h3 style={{fontFamily: 'cursive'}}>Title : <h4>{data.title}</h4></h3>
                        </div>
                        
                       
                    </div>

                </div>
                
               { tgl && (<div className = "enddiv">{nutition()}</div>) }
                
                <Link to={_link} >Details</Link>
                <button onClick={()=>{history.push('./Recipe')}}>Details</button>

        </div>
     );
}
 
export default Cardc;