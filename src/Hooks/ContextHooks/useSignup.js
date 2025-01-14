import Signupcontext from "@/Context/SignupContext";
import { useContext } from "react";

function useSignup(){
    return useContext(Signupcontext);
}

export default useSignup;