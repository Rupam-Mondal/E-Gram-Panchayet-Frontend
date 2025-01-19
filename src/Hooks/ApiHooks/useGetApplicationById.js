import { GetApplicationById } from "@/Apis/Applications/Applications";
import { useQuery } from "@tanstack/react-query";

export function useGetApplicationById(Id){
    const { data, isSuccess, isError, isFetching } = useQuery({
        queryFn:() => {
            const Object = {
                ApplicationId:Id
            };
            return GetApplicationById(Object);
        },
        queryKey:[`GetApplicationById-${Id}`]
    });
    return {
        data, isSuccess, isError, isFetching
    }
}