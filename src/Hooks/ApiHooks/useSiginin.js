import SigninRequest from "@/Apis/Auth/Signin";
import { useMutation }from "@tanstack/react-query";
import { useAuth } from "../ContextHooks/useAuth";

function useSignin(){
    const { auth, setAuth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: SigninRequest,
        onSuccess:(response) => {
            if (response.success == false) {
                console.log(response);
                throw new Error(response.message);
            }
            else{
                localStorage.setItem('Token', response.data.token);
                const userObject = JSON.stringify(response.data);
                localStorage.setItem('user', userObject);
                setAuth({
                    user: response.data,
                    token: response.data.token
                })
            }
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