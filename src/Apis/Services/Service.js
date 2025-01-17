import { AxiosInstance } from "@/Config/AxiosConfig";

export async function getAllService(){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.get('/service/getAllService' , {
            headers:{
                'x-access-token':token
            }
        });
        return response.data;
    } catch (error) {
        console.log("Something went wrong");
        throw error;
    }
}

export async function createService(createServiceObject){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.post('/service/createService' , createServiceObject , {
            headers:{
                'x-access-token':token
            }
        });
        return response.data;
    } catch (error) {
        console.log("Something went wrong");
        throw error;
    }
}