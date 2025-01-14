'use client'

import { useParams } from "next/navigation"
import { useEffect } from "react"

export default function EditProductPage() {
    const params =useParams()
    
    useEffect(()=>{


    },[])
    


    async function fetchProduct(){
        try {
            const url = ""+params.id
        } catch (error) {
            
        }
    }
    return (

        <div>
            <h4>Edit Product ID: {params.id}</h4>
        </div>

    )
}