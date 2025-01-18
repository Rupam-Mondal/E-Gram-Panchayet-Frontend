import { AxiosInstance } from "@/Config/AxiosConfig";

export async function GetApplicationByProgress(Object){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.get('/Application/details/progress' , {
            headers:{
                'x-access-token':token
            },
            params:Object
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}