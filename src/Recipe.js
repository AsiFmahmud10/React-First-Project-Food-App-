import { useEffect } from "react";
import { useContext, useState } from "react";
import { ThemeContext } from "./Theme/ThemeContext";
import {Fetch} from './fetchApi'
import { DataContext } from "./dataContext/DataContext";
import React from 'react'
import './recipe.css'
const Recipe = () => {


     const {foodId,setFoodId} = useContext(DataContext)
    const {color,background}=useContext(ThemeContext)
      
    let url = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=9d1d7e5acfb344e7b0028ac0144e5c87&includeNutrition=false`
    
   
    const [recipe,setRecipe] = useState(null)
    const [error,setError] = useState(null)
    
    
    useEffect(()=>{
        if(foodId != null)
        Fetch(setRecipe,url,setError)
    },[url])
    
    let img ,summary,sourch,dishTypes,ing,item = [],readyInMinutes,title
 
    if(recipe != null){
      
             img = recipe.image ? recipe.image : "Image is not available"
             readyInMinutes =recipe.readyInMinutes ? recipe.readyInMinutes : " Is not available"
             sourch = recipe.sourceUrl ? recipe.sourceUrl : "sourceUrl is not available"
             dishTypes = recipe.dishTypes ? recipe.dishTypes : "dishTypes is not available"
             summary = recipe.instructions ? recipe.instructions : "dishTypes is not available"
             title = recipe.title ? recipe.title : "title is not available"
        }
    
     
        if(recipe != null && recipe.extendedIngredients){
            let res = recipe.extendedIngredients
             res.map((data)=>{
               item = [...item,{ name : data.name,image : data.image}]
              
            })
        }
    
      
    return ( 

        <div style={{background:background,color:color}}>
               
             { recipe &&
              ( <div className="recipe">
                            <div className="recipe_image">
                                    <h1 className="recipe_title">
                                                {title}
                                    </h1>
                                    <img src={img} alt=""/>
                            </div>
                        
                        <div className="recipe_ingredients">
                               
                                <div style={{margin: '55px 0px'}}>
                                     <h2>
                                            {"ingredients".toUpperCase()} : </h2> <br/>
                                        {item.map((item)=>(
                                           
                                            <span key={item.name} style={{margin:'10px',textTransform:'uppercase'}} >
                                                {item.name} <br/>
                                            </span>
                                              )

                                        )}
                                    <div className="recipe_time" style={{marginTop: '17px'}}>
                                        <h3>Time Taking :{readyInMinutes} min</h3>
                                      
                                    
                                    </div>

                            </div>
                        </div>
                                                   {/* summary */}
                 
                 <div className="summary" dangerouslySetInnerHTML ={{ __html: summary }}/>

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