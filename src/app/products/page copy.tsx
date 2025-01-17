"use client"

import { Product } from "@/model/product"
import axios from "axios"
import { useEffect, useState } from "react"
import classess from './products.module.css'
import { useRouter } from "next/navigation"
import {useSelector} from "react-redux"
import { AppState } from "@/redux/store"
import { useTitle } from "@/hooks/useTitle"

export default function ListProducts() {
    const url = "http://localhost:9000/secure_products"
        // const url = "http://localhost:9000/products"
    const route = useRouter();
    const [products, setProducts] = useState<Product[]>([])
    useTitle('Products')
    useEffect(() => {
        fetchProducts()
    }, [])

   const auth = useSelector((state: AppState)=> state.auth)

    async function fetchProducts() {
        try {

            if(!auth.isAuthenticated){
                route.push('/login')

                return;
            }

            const headers = {"Authorization": `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product[]>(url,{headers});
            console.log("Fulfilled fecthporduct", response.data)
            setProducts(response.data)
        } catch (error) {
            console.log("Fetch Product error", error)

        }
    }

    async function deleteProduct(product: Product){
        try {
            const deleteURL = url+"/"+product.id;
            const deleteResponse = await axios.delete(deleteURL)
            // await fetchProducts();

            //create a copy of products
            const copy_of_products = [...products]
            const index = copy_of_products.findIndex(item => item.id===product.id)
            if(index !== -1){
                copy_of_products.splice(index,1);
                setProducts(copy_of_products)
            }
            alert("Deleted Sucessfully ID: "+product.id)


        } catch (error) {
            alert("Deletion Failed for  ID: "+error)
        }

    }

    function editProduct(prod: Product){
        route.push("/products/"+prod.id)
    }
    return (
        <div>
            <h4>Porducts List</h4>
                <div style={{display: "flex", flexFlow: "row-wrap", justifyContent: "center"}}>
                    {products.map(prod => {
                        return (
                            <div className={classess.product} key={prod.id}>
                                <p>ID: {prod.id}</p>
                                <p>Name: {prod.name}</p>
                                <p>Description: {prod.description}</p>
                                <p>Price: {prod.price}</p>
                                <button className="btn btn-warning" onClick={()=>{deleteProduct(prod)}}>Delete</button>&nbsp;
                                <button className="btn btn-primary" onClick={()=>{editProduct(prod)}}>Edit</button>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}