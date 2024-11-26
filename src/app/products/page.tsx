'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "@/model/Product";
import classes from './page.module.css';
import { useRouter } from "next/navigation";

//const baseURL = 'http://localhost:9000/products';
const baseURL = 'http://localhost:9000/secure_products';

export default function ListProductsPage() {

    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() =>{fetchProducts()
    }, []);

    async function fetchProducts() {
        try{
            const response = await axios.get<Product[]>(baseURL);
            console.log("response",response);
            setProducts(response.data);

        }catch(error){
            console.log(error);
        }
    }

    async function deleteProduct(product: Product) {

        try{
            const url = `${baseURL}/${product.id}`;
            await axios.delete(url);
            //await fetchProducts(baseURL);
            //products.splice(products.indexOf(product), 1);
            const copy = [...products];
            const index = copy.indexOf(product);
            if(index !== -1){
                copy.splice(index, 1);
                setProducts(copy);
            }
            
            alert("Product Deleted" + product.id);
        }catch{
            alert("Delete product failed" + product.id);
        }

    }

    async function editProduct(product: Product) {
        router.push("/products/" + product.id);

    }


return(
    <div>
        <h4> List Products </h4>
        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
            {products.map(product => {
        return(
        <div key={product.id} className={classes.product}>
            <p>ID: {product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.description}</p>
            {/* <img src={product.imageUrl} alt={product.name} style={{width: "100px"}}/> */}
        <div>
            <button className="btn btn-warning" onClick={() => deleteProduct(product)}>Delete</button>
            <button className="btn btn-info"  onClick={() => editProduct(product)}>Edit</button>
            
       </div>
        
        </div>)
        })}
        
        </div>
    </div>
)
}