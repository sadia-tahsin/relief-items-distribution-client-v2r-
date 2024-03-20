import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
 const elements = useElements();
 const stripe = useStripe();
  const handleSubmit = async(event:any)=>{
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    
    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  }
  
 
  return (
    <div>
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
      {/* <button type='submit' className='btn btn-primary'>Pay</button> */}
    </form>
    </div>
  );
};

export default CheckoutForm;