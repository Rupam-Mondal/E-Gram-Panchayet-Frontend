import { AxiosInstance }from "@/Config/AxiosConfig";

async function SigninRequest(SigninObject){
    try {
        const response = AxiosInstance.get('/user/signin' , {
            params:SigninObject
        });
        if (response.status === 400 || !response.data.success) {
            throw new Error(response.data.message || 'Signup failed');
        }
        return response.data;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}

export default SigninRequest;