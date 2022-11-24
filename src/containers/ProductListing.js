import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => (state))
    console.log("products", products)

    const dispatch = useDispatch()



    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Error",err)
        })
        dispatch(setProducts(response.data))

        // console.log("resposne",response.data)
    }

    useEffect(()=> {
        fetchProducts()

    },[])


    return (
        <div style={{ marginTop:'60px'}}>
            <ProductComponent/>
            {/* <h1>Product Listing</h1> */}
        </div>

    );
}

export default ProductListing;