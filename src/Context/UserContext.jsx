import { createContext, useEffect, useState } from "react";

const Authcontext = createContext();

export function AuthcontextProvider({ children }){
    const [auth , setAuth] = useState({
        user:null,
        token:null
    });
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (storedToken && storedUser) {
            setAuth({
                user: JSON.parse(storedUser),
                token: storedToken,
            });
        }
    } , []);
    return (
        <Authcontext.Provider value={{auth , setAuth}}>
            {children}
        </Authcontext.Provider>
    )
}

export default Authcontext;