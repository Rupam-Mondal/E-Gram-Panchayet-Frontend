import SigninRequest from "@/Apis/Auth/Signin";
import { useMutation }from "@tanstack/react-query";
import { useAuth } from "../ContextHooks/useAuth";

function useSignin(){
    const { auth, setAuth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: SigninRequest,
        onSuccess:(response) => {
            if (response.success == false) {
                throw new Error(response.message);
            }
            else{
                console.log(response)
                localStorage.setItem('token', response.data.token);
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