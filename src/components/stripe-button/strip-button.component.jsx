import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H2KeBG5Az7m0ToMcqQLMaAuoyJzP7Up3k7DiK7aZ1Kz5P0gKCVdwThDq4Gsf8mCmEwbul5y79056OTD7wGGoVDC001yI1uS5h'
    const onToken = token => {
        console.log(token);
        alert('Dummy Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='ECommerce'
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeButton