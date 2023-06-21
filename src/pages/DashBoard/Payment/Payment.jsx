import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../components/CheckOutForm";
import './payment.css'
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GETWAY_PK}`);

const Payment = () => {
    const location = useLocation();
    const bookedClass = location.state?.bookedClass
    const price = parseFloat(Math.floor(bookedClass.price))
    
    return (
        <div className="w-1/2 mx-auto ml-60 bg-[#FFF7DF] text-xl p-10">
            <h3 className="text-center">Make Payment</h3>
            <div className="ml-2">
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} bookedClass={bookedClass}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;