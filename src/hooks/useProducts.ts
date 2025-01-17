import { Product } from "@/model/product";
import { AppState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import router from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useProducts(url: string){
    const [products, setProducts] = useState<Product[]>([])
    const auth = useSelector((state: AppState)=> state.auth)
    const route = useRouter();


    useEffect(() => {
            fetchProducts();


        }, []);

        async function fetchProducts(){

            try {
    
                if(!auth.isAuthenticated){
                    router.push("/login");
                    return;
                }
                
                const headers = {"Authorization": `Bearer ${auth.accessToken}`};
                const response = await axios.get<Product[]>(url, {headers});
                console.log("fetchProducts", response.data);
                setProducts(response.data);
    
            } catch (error) {
                console.log("fetchProducts", error);
    
            }
        }
    
    
        return {products, setProducts, auth, router, fetchProducts};
        
}