import {useEffect, useState} from 'react';
import axios from 'axios';
import { Product } from '../model/Product';
import './ListProducts.css';

function ListProducts(){

    const [products, setProducts] = useState<Array<Product>>([]);
    //let products: Array<Product> = [new Product(1, "abc", 70000, "some desc")];

    //useEffect(callback, [list of dependencies]);
    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts(){

        const promise = axios.get<Array<Product>>("http://localhost:9000/products");
        //promise.then(successCallback, errorCallback)
        promise.then((response) => {

            console.log("success", response);
            setProducts(response.data);
            // products = response.data;
            // console.log("products", products);

        }, (error) => {

            console.log("error", error);
        })

    }


    return (
        <div>
            <h4>List Products</h4>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((item) => {

                    return (
                        <div className='product'>
                            <p>Id: {item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    );

                })}
            </div>


        </div>


    )
}

export default ListProducts;