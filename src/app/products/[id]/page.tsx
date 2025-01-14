'use client'

import { Product } from "@/model/product"
import axios from "axios"
import { useParams, useRouter } from "next/navigation"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"

const url = "http://localhost:9000/products/"
export default function EditProductPage() {
    const params =useParams()
    const [product, setProduct] = useState<Product>();
    const route = useRouter()
    const [name, setName] = useState(product?.name)
    const [price, setPrice] = useState(product?.price)
    const [desc, setDesc] = useState(product?.description)

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
            const response = await axios.put(url,{id:params.id,name:name,description:desc,price:price})
            alert(response);
            console.log("Updated the value", response)

        } catch (error) {
            alert(error);
        }
        
        route.push("/products");
    }
    function updateName(event: ChangeEvent<HTMLInputElement>){
        const name = event.target.value;
        // setName(name);
    }
    function cancel(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        route.push("/products");

    }
    return (

        <div>
            <h4>Edit Product ID: {params.id}</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={name} onChange={evt => {setName(evt.target.value)}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" value={price} onChange={evt => {setPrice(Number(evt.target.value))}} />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" type="text" id="desc" value={desc} onChange={evt => {setDesc(evt.target.value)}} />
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