import { useEffect, useState } from "react";


const Fetch =async (setData,url,setError)=>{
     
      try{
            let local = await fetch(url)

            console.log(local,"local")
            if(!local.ok){
                  throw new Error('Sorry the api call is limited')
            }
            local = await local.json()
            
            if(!local.results.length){
                  throw new Error('type correct name of the item'.toUpperCase())
            }
            console.log(local)
            setData(local)
            setError(null)

      }catch(err){
          setData(null)  
          setError(err.message) 
      }
}


export {Fetch}