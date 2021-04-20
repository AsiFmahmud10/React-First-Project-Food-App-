import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import { ThemeContext } from "./Theme/ThemeContext";
import {Fetch} from './fetchApi'
import { useParams } from "react-router";

const Recipe = () => {
    let {id:_id} = useParams()
    const {color,background}=useContext(ThemeContext)
    
    let url = `https://api.spoonacular.com/recipes/${_id}/information?apiKey=9d1d7e5acfb344e7b0028ac0144e5c87&includeNutrition=false`
    
     console.log(_id,"iddd")
    const [recipe,setRecipe] = useState(null)
    const [error,setError] = useState(null)
    
    
    useEffect(()=>{
        if(_id != null)
        Fetch(setRecipe,url,setError)
    },[url])
    
    let img ,summary,sourch,dishTypes,ing,item = [],readyInMinutes
 
    if(recipe != null){
      
             img = recipe.image ? recipe.image : "Image is not available"
             readyInMinutes =recipe.readyInMinutes ? recipe.readyInMinutes : " Is not available"
             sourch = recipe.sourceUrl ? recipe.sourceUrl : "sourceUrl is not available"
             dishTypes = recipe.dishTypes ? recipe.dishTypes : "dishTypes is not available"
             
        }
    
     
        if(recipe != null && recipe.extendedIngredients){
            let res = recipe.extendedIngredients
             res.map((data)=>{
               item = [...item,{ name : data.name,image : data.image}]
              
            })
        }
    
      
    return ( 

        <div style={{background:background,color:color}}>

             { recipe && ( <div className="recipe">
                        <img src={img} alt=""/>
                        <div className="recipe_item">
                               
                                <div>
                                     <h2>
                                            {"ingredients".toUpperCase()} : </h2> <br/>
                                        {item.map((item)=>(
                                            <>
                                            <span key={item.name} style={{margin:'10px',textTransform:'uppercase'}} key={item.name}>
                                                {item.name} <br/>
                                            </span>
                                                </> )

                                        )}
                                    <div className="recipe_title">
                                        <h3>Time Taking :{readyInMinutes} min</h3>
                                      
                                      {/*    <button style={{padding:'10px',color:"#dddd",background:background}}>
                                            <a style={{textDecoration:'none',color:color}} href={sourch}>Full recipe</a>
                                            
                                    </button>
                                    */}
                                    </div>

                            </div>
                        </div>

                </div>)}
               
                {
                    error && (
                        <div>
                            {error}
                        </div>    
                    )
                }

        </div>

     );
}
 
export default Recipe;