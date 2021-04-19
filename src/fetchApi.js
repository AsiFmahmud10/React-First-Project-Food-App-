import { useEffect, useState } from "react";


const Fetch = async (setData,url,setError)=>{
     
      try{
            let local = await fetch(url)

            if(!local.ok){
                  throw new Error('Sorry the api call is limited')
            }
            local = await local.json()

            console.log(local,"local")
           
            setData(local)
            setError(null)

      }catch(err){
          setData(null)  
          setError(err.message) 
      }
}


export {Fetch}