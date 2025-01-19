import ApplicationContext from "@/Context/CreateApplicationModal";
import {useContext } from "react";

export function useCreateApplicationContext(){
    return useContext(ApplicationContext)
}