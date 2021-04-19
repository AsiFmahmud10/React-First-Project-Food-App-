import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cardc from "./Cardc"
import {Fetch} from './fetchApi'


const Searchbar = () => {
    
    const [query,setQuery] = useState(' ')
 
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)   

    

    const search = (food)=>{
      
        console.log(query)
        let url =`https://api.spoonacular.com/recipes/complexSearch?apiKey=9d1d7e5acfb344e7b0028ac0144e5c87&query=${food}&maxFat=25&number=3
        `
        Fetch(setData,url,setError)
    }
   
    return ( 

     <div className="bar">
         <form onSubmit={  (e)=>{e.preventDefault()
                search(query)
                setQuery('') 
            }}>
           
  
           <input type="text" placeholder="Search a recipe"
           value = {query}
           onChange = {(e)=>{  setQuery(e.target.value)}}
           />          
         </form> 
         {console.log(data,"asiiii")}
        {
          data ?  data.results.map((data)=>(
            <div className="container" key={data.id}> 
                <Cardc data = {data}/>
            </div>
        ) 

        ) : (
            <div style={{color:'orangered'}} >
                {error}
            </div>
        )
    }
        </div>
     );
}
 
export default Searchbar;