import { createContext, useState } from "react";

const CreateServiceModalContext = createContext();

export function CreateServiceModalContextProvider({children}){
    const [openModal , setOpenModal] = useState(false);

    return (
        <>
            <CreateServiceModalContext.Provider value={{openModal , setOpenModal}}>
                {children}
            </CreateServiceModalContext.Provider>
        </>
    )
}

export default CreateServiceModalContext;