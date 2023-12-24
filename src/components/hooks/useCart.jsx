import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useCart = () => {
    // const axiosSecure = useAxiosSecure();
    const { user} = useContext(AuthContext);
    const {isLoading, isError, data : cart = [], error, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://cozy-home-server.vercel.app/carts?email=${user?.email}`);
            return res.json();
        }
    })
   

    return [cart, refetch]
};

export default useCart;