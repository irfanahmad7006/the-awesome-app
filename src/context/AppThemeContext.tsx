'use client'
import React, { Children, useState } from "react";


export type ThemeState = {
    mode:string;
    changeMode? : (mode: string) => void
};

export const themeInitialState: ThemeState = {
    mode: 'light'
    
};

export const AppThemeContext = React.createContext(themeInitialState);

type AppThemeContextProviderProps={
    children: React.ReactNode
}

export default function AppThemeContextProvider(props: AppThemeContextProviderProps){

    const [mode,setMode] = useState(themeInitialState.mode)

    return(
        <AppThemeContext.Provider value={{mode,changeMode: setMode}}>

            {props.children}

        </AppThemeContext.Provider>
    )
}