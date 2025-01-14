import SigninRequest from "@/Apis/Auth/Signin";
import { useMutation }from "@tanstack/react-query";

function useSignin(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: SigninRequest,
        onSuccess:(data) => {
            localStorage.setItem('Token', response.data.token);
            const userObject = JSON.stringify(response.data);
            localStorage.setItem('user', userObject);
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

export default useSignin;