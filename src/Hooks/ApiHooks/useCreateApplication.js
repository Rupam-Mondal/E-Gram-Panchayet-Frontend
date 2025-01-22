import { CreateApplication } from "@/Apis/Applications/Applications";
import { useMutation } from "@tanstack/react-query";

export function useCreateApplication(){
    const {isPending , isSuccess , isError , mutateAsync} = useMutation({
        mutationFn: CreateApplication,
        onSuccess:(data) => {
            console.log(data);
        },
        onError:(data) => {
            console.log(data);
        }
    });
    return {
        isPending, 
        isSuccess, 
        isError, 
        mutateAsync
    }
}