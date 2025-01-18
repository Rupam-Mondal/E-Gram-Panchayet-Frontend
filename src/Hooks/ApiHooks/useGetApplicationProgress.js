import { GetApplicationByProgress } from "@/Apis/Applications/Applications";
import { useQuery } from "@tanstack/react-query";

export function useGetApplicationOnProgress(progress){
    const { data, isSuccess, isError, isFetching } = useQuery({
        queryFn:async () => {
            const Object = {
                progress:progress
            }
            const response = GetApplicationByProgress(Object);
            return response;
        },
        queryKey:['ApplicationsProgress']
    });
    return {
        data, isSuccess, isError, isFetching
    }
}