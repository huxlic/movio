import { createContext, useEffect, useState } from "react"

export const MediaTypeContext = createContext();

const GlobalContext = ({children}) => {
    const [mediaType, setMediaType] = useState(() => {
    return localStorage.getItem("mediaType")})

     useEffect(() => {
       localStorage.setItem("mediaType", mediaType);
     }, [mediaType]);

  return (
    <>
        <MediaTypeContext.Provider value={{mediaType, setMediaType}}>
            {children}
        </MediaTypeContext.Provider>
    </>
  )
}

export default GlobalContext