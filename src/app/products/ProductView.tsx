'use client'
import { Product } from "@/model/product"
import classes from './products.module.css';
import React from "react";
type ProductViewProps = {
    data: Product,
    onDelete: (product: Product) => void;
    onEdit: (product: Product) => void;
}


//<ProductView data={product}/>
export default React.memo( function ProductView(props: ProductViewProps){

   
    const {data, onDelete, onEdit} = props;
    console.log("rendering product: " + data.id);
    return (
        <div className={classes.product} key={data.id}>
                            <p>Id: {data.id}</p>
                            <p>{data.name}</p>
                            <p>{data.description}</p>
                            <p>Price: {data.price}</p>

                             <button className="btn btn-warning" onClick={() => {onDelete(data)}}>Delete</button>&nbsp;
                            {/* <button className="btn btn-warning" onClick={test}>Delete</button>&nbsp; */}
                             <button className="btn btn-primary" onClick={() => onEdit(data)}>Edit</button> 
        </div>
    )
})