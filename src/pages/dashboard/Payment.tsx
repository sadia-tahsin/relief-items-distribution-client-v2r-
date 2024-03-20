import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/form/CheckoutForm";

const stripePromise = loadStripe("pk_test_51IeGwFJyvC3yWksiIV7cFi4coXAiD1wfLyiHYcfEvBisXceTnPJqho28LC8tOm3i8x50VTndf0sTpoLqzMZkF09300TvTg0LH3")
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;