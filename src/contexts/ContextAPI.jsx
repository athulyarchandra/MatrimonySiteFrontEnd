 import React, { createContext, useState } from 'react'
 export const editProfileResponseContext = createContext()
 const ContextAPI = ({children}) => {
    const [editProfileResponse,setEditProfileResponse] = useState("")
   return (
     <editProfileResponseContext.Provider value={{editProfileResponse,setEditProfileResponse}}>
        {children}
     </editProfileResponseContext.Provider>
   )
 }
 
 export default ContextAPI 