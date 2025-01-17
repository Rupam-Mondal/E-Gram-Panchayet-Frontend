import { getServiceById } from "@/Apis/Services/Service";
import { useQuery } from "@tanstack/react-query";

export function useGetServiceById(Id){
    const { data, isSuccess, isFetching, error } = useQuery({
        queryFn:async () => {
            const Object = {
                serviceId:Id
            }
            const data = await getServiceById(Object);
            return data;
        },
        queryKey:[`Service-${Id}`]
    });
    return {
        data, 
        isSuccess, 
        isFetching, 
        error
    }
}