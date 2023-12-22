import axios from "axios";


const useTask = () => {
    const {
        refetch,
        data = [],
        isLoading: isUserLoading,
      } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
          const res = await axios.get("http://localhost:5001/tasks");
          return res.data;
        },
      });
    return  {refetch,data,isUserLoading}

export default useTask;