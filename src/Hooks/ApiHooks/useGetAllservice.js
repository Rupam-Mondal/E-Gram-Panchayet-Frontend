import { getAllService } from "@/Apis/Services/Service";
import { useQuery } from "@tanstack/react-query";

function useGetAllservice(){
    const { data, isSuccess, isError, isFetching } = useQuery({
        queryFn: getAllService,
        queryKey:['GetAllservice']
    });

    return {
        data, isSuccess, isError, isFetching
    }
}

export default useGetAllservice;