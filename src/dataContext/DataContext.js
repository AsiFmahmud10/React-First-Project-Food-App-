import { createContext, useState } from "react"

export const DataContext = createContext() 

const  DataContextProveder = (props)=>{

        const [data, setData] =  useState(null)
        const [error, setError] = useState(null)
        
    return (
            <>
                    <DataContext.Provider  value = {{setData,setError,data,error}}>
                                {props.children}
                    </DataContext.Provider>
           </>
    )


}
export default DataContextProveder
