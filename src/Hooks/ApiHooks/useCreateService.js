import { createService } from "@/Apis/Services/Service";
import { useMutation } from "@tanstack/react-query";

function useCreateService(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: createService,
        onSuccess:(data) => {
            if(data?.response == false){
                throw new Error(data.message);
            }
            console.log(data);
        },
        onError: (data) => {
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

export default useCreateService;