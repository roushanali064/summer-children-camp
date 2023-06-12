import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../pages/Shared/Provider/AuthProvider";

const CheckoutForm = ({price, bookedClass}) => {
    const {user} = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false)
    console.log(bookedClass)

    useEffect(()=>{
      axios.post('https://summer-children-camp-server.vercel.app/create-payment-intent',{price})
      .then(res=>{
        console.log(res.data?.clientSecret)
        setClientSecret(res.data?.clientSecret)
      })
    },[])
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
      
      console.log('card console',card)
      
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error?.message}`,
      })
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

      setProcessing(true)

      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName
            },
          },
        },
      );

      if(confirmError){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Some thing wrong",
          })
      }
      console.log('confirmError',confirmError)
      console.log(paymentIntent)

      setProcessing(false)
      if(paymentIntent.status === 'succeeded'){
        
        const transactionId = paymentIntent.id
        const payment = {
          email: user?.email,
          transactionId,
          instructor: bookedClass?.instructor,
          price,
          name: bookedClass.name,
        }
        axios.post('https://summer-children-camp-server.vercel.app/payments',payment)
        .then(res=>{
          if(res.data.insertedId){
            axios.delete(`https://summer-children-camp-server.vercel.app/booked/class/${bookedClass._id}`)
            Swal.fire(
              'Payment Successfully!',
              'You clicked the button!',
              'success'
          )
          }
        })
        .catch(error=>{
          console.log(error)
        })
      }
      

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white ml-[50%]" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
    );
  };
  export default CheckoutForm