import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://cozy-home-server.vercel.app/products")
        .then(res=> res.json())
        .then(data=> 
           { console.log(data)
            setProducts(data)}
            )
    },[])
    return (

        <div className='pt-16'>
            <img src="https://i.ibb.co/f9MJhrQ/60185307-cd2f-4fb5-ba4b-b4a0bbede1c0-BD-1920-500.jpg" alt="" />

            <h1 className='text-3xl font-serif font-semibold text-center my-8'>Cozy home decores are here</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ms-20'>
             {
                products.map(product=><ProductsCard
                key={product._id}
                product={product}
                ></ProductsCard>)
             }
            </div>
        </div>
    );
};

export default Products;