import {useEffect, useState} from 'react';
import axios from 'axios';
import { Product } from '../model/Product';
import './ListProducts.css';
import {useNavigate} from 'react-router-dom';

function ListProducts(){

    const [products, setProducts] = useState<Array<Product>>([]);
    //let products: Array<Product> = [new Product(1, "abc", 70000, "some desc")];

    const navigate = useNavigate();

    //useEffect(callback, [list of dependencies]);
    useEffect(() => {

        console.log("ListProducts Mounted...");
        fetchProductsAsync();

        //callback invoked on unmount
        return () => {
            console.log("ListProducts Unmounted...");
        }

    }, []);

    //invoked when the dependecy(products) changes
    useEffect(() => {
        console.log("products updated", products);
    }, [products])



    async function fetchProductsAsync(){

        try{
             const response = await axios.get<Array<Product>>("http://localhost:9000/products");
             console.log("success", response);
             setProducts(response.data);
             
            
        }
        catch(error){
            console.log("error", error);
        }
    }

    function fetchProducts(){

        // const promise = axios.get<Array<Product>>("http://localhost:9000/products");
        // //promise.then(successCallback, errorCallback)
        // promise.then((response) => {

        //     console.log("success", response);
        //     setProducts(response.data);
        //     // products = response.data;
        //     // console.log("products", products);

        // }, (error) => {

        //     console.log("error", error);
        // })

        axios
            .get<Array<Product>>("http://localhost:9000/products")
            .then((response) => {
                    console.log("success", response);
                    setProducts(response.data);
                    // products = response.data;
                    // console.log("products", products);
            }, (error) => {
                console.log("error", error);
            })

    }
    async function deleteProduct(product: Product){

        try{

            const response = await axios.delete(`http://localhost:9000/products/${product.id}`);
            alert(`Product with id: ${product.id} deleted`);
            //fetchProductsAsync();

            const copyOfProducts = [...products];
            const indexofElementToDelete = copyOfProducts.findIndex(item => item.id === product.id);
            if(indexofElementToDelete !== -1){

                copyOfProducts.splice(indexofElementToDelete, 1);
                setProducts(copyOfProducts);
            }



        }catch(error){
            alert(`Product with id: ${product.id} not found`);
        }

    }

    function editProduct(product: Product){

        navigate(`/products/${product.id}`)
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
                            <div>
                                <button onClick={() => {deleteProduct(item)}}>Delete</button>&nbsp;
                                <button onClick={() => {editProduct(item)}}>Edit</button>
                            </div>
                        </div>
                    );

                })}
            </div>


        </div>


    )
}

export default ListProducts;