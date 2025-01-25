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

export async function GetApplicationById(ApplicationObject){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.get('/Application/getdetails' , {
            headers:{
                'x-access-token':token
            },
            params:ApplicationObject
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function CreateApplication(Formdata){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.post('/Application/createApplication' , Formdata , {
            headers:{
                'x-access-token':token
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function UpdateApplication(UpdateObject){
    try {
        const token = localStorage.getItem('token');
        const response = await AxiosInstance.post('/Application/updateApplication' , UpdateObject , {
            headers:{
                'x-access-token':token,
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}