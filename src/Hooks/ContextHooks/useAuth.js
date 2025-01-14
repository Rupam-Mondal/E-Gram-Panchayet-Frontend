import Authcontext from "@/Context/UserContext";
import { useContext } from "react";

export function useAuth(){
    return useContext(Authcontext);
}