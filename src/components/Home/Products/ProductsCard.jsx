import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({product}) => {
    const {image, title, variations, _id} = product;
    return (
        <div>
         <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Title: {title}</h2>
    <p className='font-bold'>Variation of colors: {variations.color1} & {variations.color2}</p>
    <p className='font-bold'>Variation of sizes: {variations.size1} & {variations.size2}</p>
    <div className="card-actions justify-end">
    <Link to={`/products/${_id}`}> <button className="btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded">
DETAILS
</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductsCard;