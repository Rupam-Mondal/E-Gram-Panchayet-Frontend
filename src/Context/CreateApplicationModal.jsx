import { createContext, useState } from "react";

const ApplicationContext = createContext();

export function CreateApplicationContextProvider({children}){
    const [openModal , setOpenModal] = useState(false);
    return (
        <>
            <ApplicationContext.Provider value={{ openModal, setOpenModal }}>
                {children}
            </ApplicationContext.Provider>
        </>
    )
}

export default ApplicationContext;