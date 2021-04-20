import { createContext, useContext, useState } from "react"

export const dataContext = createContext() 

const  DataContextProveder = (props)=>{

        const [data, setData] =  useState(null)
        const [error, setError] = useState(null)
        
        const fetchData=(_data)=>{
                setData(_data) 
                console.log("fetch")
        }

    return (
            <>
                    <dataContext.Provider  value = {{setData,setError,fetchData,data,error}}>
                                {props.children}
                    </dataContext.Provider>
           </>
    )


}
export default DataContextProveder
