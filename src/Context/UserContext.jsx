import { createContext, useState } from "react";

const Authcontext = createContext();

export function AuthcontextProvider({ children }){
    const [auth , setAuth] = useState({
        user:null,
        token:null
    });
    return (
        <Authcontext.Provider value={{auth , setAuth}}>
            {children}
        </Authcontext.Provider>
    )
}

export default Authcontext;