import { AxiosInstance }from "@/Config/AxiosConfig";

async function SigninRequest(SigninObject){
    try {
        const response = await AxiosInstance.get('/user/signin' , {
            params:SigninObject
        });
        return response.data;
    } catch (error) {
        console.log("Axios error");
        return null;
    }
}

export default SigninRequest;