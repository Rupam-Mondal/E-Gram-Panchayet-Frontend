import { Signup } from "@/Apis/Auth/Signup";
import { useMutation } from "@tanstack/react-query";

export function useSignupapi(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: Signup,
        onSuccess: (data) => {
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