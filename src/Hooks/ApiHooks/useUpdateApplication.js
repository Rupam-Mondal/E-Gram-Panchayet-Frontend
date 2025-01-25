import { UpdateApplication } from "@/Apis/Applications/Applications";
import { useMutation } from "@tanstack/react-query";

export function useUpdateApplication(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: UpdateApplication,
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
        error, 
        mutateAsync
    }
}