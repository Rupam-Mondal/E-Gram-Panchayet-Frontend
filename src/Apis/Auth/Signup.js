import { AxiosInstance } from"@/Config/AxiosConfig";


export async function Signup(SignupObject) {
    try {
        const response = await AxiosInstance.post('/user/signup' , SignupObject);
        if (response.status === 400 || !response.data.success) {
            throw new Error(response.data.message || 'Signup failed');
        }
        return response.data;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}