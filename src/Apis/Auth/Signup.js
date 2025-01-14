import { AxiosInstance } from"@/Config/AxiosConfig";


export async function Signup(SignupObject) {
    try {
        const response = await AxiosInstance.post('/user/signup' , SignupObject);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}