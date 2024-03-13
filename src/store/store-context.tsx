'use client'

import React, { useState } from "react"


type StoreContextObj = {
    skillsState: boolean;
    skillsClicked: () => void
}


export const StoreContext = React.createContext<StoreContextObj>({
    skillsState: false,
    skillsClicked: () => { },
})

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const [skillsLooking, setSkillsLooking] = useState<boolean>(false)

    const skillsClickedHandler = () => {
    
        setSkillsLooking(!skillsLooking)
    }



    const contextValue: StoreContextObj = {
        skillsState: skillsLooking,
        skillsClicked: skillsClickedHandler,
    }

    return <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
}


export default StoreContextProvider;