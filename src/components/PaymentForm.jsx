import { CardElement, useElements, useStripe, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartProducts } from "../stores/cart/cartSlice";
import { getAddress, clearAddress } from "../stores/userInfo/addressSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from "./elements/Button";
import axios from "axios";
import { ProductsBill } from "./productBill";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const StripeWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(cartProducts);
    const address = useSelector(getAddress);
    const navigate = useNavigate();
    //const elements = useElements();
    //const stripe = useStripe();

    const calculateOrderAmount =(orderItems) =>{
        const initialValue=0;
        const itemsPrice= orderItems.reduce(
            (previousValue, currentValue) =>
            previousValue+currentValue.price * currentValue.amount, initialValue
        );
        return itemsPrice;
    }
/*
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || !cart?.length || !address) {
            return;
        }

        setLoading(true);
        try {
            const { error: backeEndError, clientSecret } = await fetch('http://localhost:8080/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    paymentMethodType: 'card',
                    orderItems: cart,
                    userId: '',
                    shippingAddress: address
                })
            }).then(r => r.json());

            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement)
                    }
                }
            )
            if (backeEndError || stripeError) {
                setError(backeEndError || stripeError)
            } else if (paymentIntent.status === 'succeeded') {
                dispatch(clearAddress());
                dispatch(clearCart());
                navigate('/payment-success');
            }

        } catch(err) {
            console.log(err);
        }

        setLoading(false);
    }
*/

const url="http://localhost:3001/create-payment-intent"
const createOrder = async(orderData)=>{
    setLoading(true);
    try{
        await axios.post(url,orderData);
    }catch(error){
        console.log(error);
    }
}
const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
        //paymentMethodType: 'card',
        orderItems: cart,
        user: sessionStorage.getItem('User Id'),
        shippingAddress: address,
    };
    createOrder(orderData);
    // Dispatch clearAddress and clearCart actions
    dispatch(clearAddress());
    dispatch(clearCart());
    // Navigate to the payment success page
    navigate('/payment-success');
    setLoading(false);
}
    /*
    setLoading(true);
    try {
         await fetch('http://localhost:3001/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                orderItems: cart,
                userId: '',
                shippingAddress: address
            })
        }).then(r => r.json());
            // Dispatch clearAddress and clearCart actions
            dispatch(clearAddress());
            dispatch(clearCart());
            // Navigate to the payment success page
            navigate('/payment-success');
          
          
          
          
          
          
          
          

        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }
        )
        if (backeEndError || stripeError) {
            setError(backeEndError || stripeError)
        } else if (paymentIntent.status === 'succeeded') {
            dispatch(clearAddress());
            dispatch(clearCart());
            navigate('/payment-success');
        }
            
    } catch(err) {
        console.log(err);
    }

    setLoading(false);
}
*/
    return (
        <form className="md:-2/3 md:mx-auto px-14 pt-1" id="payment-form" onSubmit={handleSubmit}>
            <div className="flex flex-col">
            { cart && cart?.map((product, index) => {
                return (
                    <ProductsBill product={product} key={index} />
                )
            })}
            </div>
            <label htmlFor="card-element" className="pt-4 text-1.5xl md:text-center"><b>Estimated amount : </b>Rs. {calculateOrderAmount(cart)}</label><br></br>
            <label htmlFor="card-element" className="pt-4 text-1.5xl md:text-center"><b> CGST            : </b>Rs. 150</label><br></br>
            <label htmlFor="card-element" className="pt-4 text-1.5xl md:text-center"><b> SGST            : </b>Rs. 50</label><br></br>
            <label htmlFor="card-element" className="pt-4 text-1.5xl md:text-center"><b> Total amount    : </b>Rs. {calculateOrderAmount(cart)+200}</label>
            
            <div className="my-4">
                <CardElement id="card-element" />
            </div>
            <div className="flex justify-center p-0.5 mb-6" >
                <Button type="submit" disbled={loading}>
                    {
                        loading ?
                        'Loading...' :
                        'Pay Now'
                    }
                </Button>
            </div>
        </form>
    )
}