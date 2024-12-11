import { createContext,useContext, useState } from "react";

const AppContext = createContext();
export const AppProvider = ({children})=>{
   const [isDarkTheme,setIsDarkTheme] = useState(false)
   function ToggleDarkTheme(){
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // const body = document.querySelector('body')
    // body.classList.toggle("dark-theme",newDarkTheme);
    // console.log(body)

    document.body.classList.toggle("dark-theme",newDarkTheme)
   }

    return <AppContext.Provider value={
        {isDarkTheme,ToggleDarkTheme}}>
        {children}
        </AppContext.Provider>

}

export const useGlobalContext = ()=>useContext(AppContext);


