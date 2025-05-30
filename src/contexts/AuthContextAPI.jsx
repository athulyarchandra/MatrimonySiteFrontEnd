import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthContext = createContext()
const AuthContextAPI = ({children}) => {
    const [isAuthorised,setIsAuthorised] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorised(true)
        }else{
            setIsAuthorised(false)
        }
    },[isAuthorised])
  return (
    <tokenAuthContext.Provider value={{isAuthorised,setIsAuthorised}}>
    {children}
    </tokenAuthContext.Provider>
  )
}

export default AuthContextAPI