import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { DataContext } from "./dataContext/DataContext"
import { ThemeContext } from "./Theme/ThemeContext"

const Cardc = ({data}) => {
     
         const [tgl,setTgl] = useState(false)
         const history = useHistory()
         const {globalTheme} = useContext(ThemeContext)
         const {foodId,setFoodId} = useContext(DataContext)
         

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
                    <div className = "card" style={{border:`1px solid whitesmoke`}}>
                        <img src={data.image} alt=""/>
                    </div>
                    <div>
                        <div style={{display:'flex',paddingLeft:'30px'}}> 
                               <h3 style={{fontFamily: 'cursive',paddingLeft: "9px"}}>Title : <p>{data.title}</p></h3>
                        </div>
                    </div>

                </div>
                
               { tgl && (<div className = "enddiv">{nutition()}</div>) }
              { /*console.log(data,"____")*/}
                <button onClick={()=>{
                    setFoodId(data.id)
                    history.push(`./Recipe`)
                    }}>Details</button>

        </div>
     );
}
 
export default Cardc;