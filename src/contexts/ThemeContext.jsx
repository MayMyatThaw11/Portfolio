import React,{createContext,useContext,useState} from 'react';
const Context=createContext(null);
export function ThemeProvider({children}){const [theme,setTheme]=useState(document.documentElement.dataset.theme||'light');function toggle(){const next=theme==='dark'?'light':'dark';setTheme(next);document.documentElement.dataset.theme=next;try{localStorage.setItem('mmt-theme',next)}catch{}}return <Context.Provider value={{theme,toggle}}>{children}</Context.Provider>}
export const useTheme=()=>useContext(Context);
