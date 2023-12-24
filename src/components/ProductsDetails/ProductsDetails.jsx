import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../hooks/useCart';

const ProductsDetails = () => {
    const productDetails = useLoaderData();
    console.log(productDetails);
    const {_id, image, title, variations,details,price} = productDetails;
    const {user}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
const [ , refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                    email: user.email,
                    image, title, variations, details, price,itemId:_id
            }
            fetch("https://cozy-home-server.vercel.app/carts",{
            method: "POST",    
            headers:{
                    'content-type' : "application/json"
                },
                body:JSON.stringify(cartItem)
            })
            .then(res=> res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `This product added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }


    
    return (
        <div>
            <div className="card lg:card-side mx-24 bg-slate-100 py-24  shadow-xl">
                <img className='pe-8' src={image} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-extrabold font-serif">Name: {title}</h2>
                    <h4 className='text-xl font-semibold '> <span className='font-bold'>Details:</span> {details}</h4>

                    <p> <span className='font-bold'>Price:</span> {price} $</p>
                    <p> <span className='font-bold'>Variation of colors: <br /> 1. </span> {variations.color1} </p>
                    <p> <span className='font-bold'> 2. </span> {variations.color2} </p>
                    <p> <span className='font-bold'>Variation of size: <br /> 1. </span> {variations.size1} </p>
                    <p> <span className='font-bold'> 2. </span> {variations.size2} </p>
                   
        <div className='text-right'>
       <button onClick={()=>handleAddToCart(productDetails)} className="btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded">
Add_To_Cart
</button>
        </div>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsDetails;