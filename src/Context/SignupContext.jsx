import { createContext, useState } from "react";

const Signupcontext = createContext();

export function Signupcontextprovider({children}){
    const [userType, setUserType] = useState('User');
    return (
        <>
            <Signupcontext.Provider value={{userType , setUserType}}>
                {children}
            </Signupcontext.Provider>
        </>
    )
}

export default Signupcontext;