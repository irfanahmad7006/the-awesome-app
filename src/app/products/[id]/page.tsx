'use client'

import { Product } from "@/model/product"
import axios from "axios"
import { useParams, useRouter } from "next/navigation"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"

const url = "http://localhost:9000/products/"
export default function EditProductPage() {
    const params =useParams()
    const [product, setProduct] = useState<Product>({id:0, name:"", price:0, description:"", imageUrl: ""});
    const route = useRouter()
   

    useEffect(()=>{
        fetchProduct();


    },[])
    


    async function fetchProduct(){
        try {
            const newUrl = url +params.id
            const response = await axios.get<Product>(newUrl);
            setProduct(response.data)

        } catch (error) {
            
        }
    }

    async function save(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        const newUrl = url +params.id;
        try {
            const response = await axios.put(newUrl,product)
            alert(response);
            console.log("Updated the value", response)

        } catch (error) {
            alert(error);
        }
        
        route.back();
    }
    function updateName(event: ChangeEvent<HTMLInputElement>){
        const copy_of_product = {...product};
        copy_of_product.name = event.target.value;
        setProduct(copy_of_product);
    }
    function cancel(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        route.back();

    }
    return (

        <div>
            <h4>Edit Product ID: {params.id}</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={product?.name} onChange= {updateName}/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" value={product?.price} onChange={e => setProduct({...product, price: Number(e.target.value)})} />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" type="text" id="desc" value={product?.description} onChange={e => setProduct({...product, description: e.target.value})} />
                </div>

                <br />

                <div>
                    {/* When you don't want to treat a button as submit button then add type attribute */}
                    {/* <button type="button" className="btn btn-info" onClick={save}>Save</button>&nbsp; */}
                    <button className="btn btn-info" onClick={save}>Save</button>&nbsp;
                    <button className="btn btn-warning" onClick={cancel}>Cancel</button>
                </div>
            </form>
        </div>

    )
}