import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import { Fetch } from "./fetchApi";
import { ThemeContext } from "./Theme/ThemeContext";

const Recipe = () => {

    const {color,surface,border,background}=useContext(ThemeContext)
    let url = "https://api.spoonacular.com/recipes/716429/information?apiKey=9d1d7e5acfb344e7b0028ac0144e5c87&includeNutrition=false"

    const [recipe,setRecipe] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=>{
        Fetch(setRecipe,url,setError)
    },[])
   
      
    let img ,summery,sourch,dishTypes,ing,item = []


    if(recipe != null){
             img = recipe.image ? recipe.image : "Image is not available"
             summery = recipe.summery ? recipe.summery : "summery is not available"
             sourch = recipe.sourceUrl ? recipe.sourceUrl : "sourceUrl is not available"
             dishTypes = recipe.dishTypes ? recipe.dishTypes : "dishTypes is not available"
             
        }
    

        if(recipe != null && recipe.extendedIngredients){
            let res = recipe.extendedIngredients
             res.map((data)=>{
               item = [...item,{ name : data.name,img : data.img}]
                console.log(item)
            })
        }
    
      
    return ( 

        <div style={{background:background,color:color}}>

             { recipe && ( <div className="recipe">
                        <img src={img} alt=""/>
                        <div className="recipe_item">
                                <div className="Dish">
                                      <img src="img" alt=""/>  
                                      summery : {summery}
                                </div>
                                
                            <ul>
                                <li>
                                     {item.map((item)=>(
                                        
                                        <li>
                                             
                                             image : <img src={item.image} alt="not available"/>
                                             name : {item.name}
                                             

                                        </li>
                                              )

                                     )}
                                </li>
                            </ul>
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