"use client";

import { Product } from "@/model/product";
import axios from "axios";

import { useTitle } from "@/hooks/useTitle";
import { useProducts } from "@/hooks/useProducts";
import ProductView from "./ProductView";
import { useState } from "react";

export default function ListProducts() {
  const url = "http://localhost:9000/secure_products";
  // const url = "http://localhost:9000/products"

  useTitle("Products");

  const { products, setProducts, auth, router } = useProducts(url);
  const [isMessageVisible, setMessageVisible] = useState(false);

  async function deleteProduct(product: Product) {
    try {
      const deleteURL = url + "/" + product.id;
      const deleteResponse = await axios.delete(deleteURL);
      // await fetchProducts();

      //create a copy of products
      const copy_of_products = [...products];
      const index = copy_of_products.findIndex(
        (item) => item.id === product.id
      );
      if (index !== -1) {
        copy_of_products.splice(index, 1);
        setProducts(copy_of_products);
      }
      alert("Deleted Sucessfully ID: " + product.id);
    } catch (error) {
      alert("Deletion Failed for  ID: " + error);
    }
  }

  function editProduct(prod: Product) {
    router.push("/products/" + prod.id);
  }
  return (
    <div>
      <h4>Porducts List</h4>

      {isMessageVisible ? (
        <div>This is a react page using axios and useState</div>
      ) : null}

      <div>
        <button className="btn btn-info" onClick={()=>{ setMessageVisible(pValue => !pValue)}}>Show/Hide</button>
      </div>

      <div
        style={{
          display: "flex",
          flexFlow: "row-wrap",
          justifyContent: "center",
        }}
      >
        {products.map((prod) => {
          return <ProductView key={prod.id} data={prod} onDelete={deleteProduct} onEdit={editProduct} />;
        })}
      </div>
    </div>
  );
}
