import CreateServiceModalContext from "@/Context/CreateServiceModalContext";
import { useContext } from "react";

export function useCreateServiceContext(){
    return useContext(CreateServiceModalContext);
}