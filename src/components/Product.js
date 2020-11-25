import React, {useState, useEffect, useRef} from 'react'

export default function Product({product}) {
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    const paypalRef = useRef();

    useEffect(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: 'USD',
                      value: product.price,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaidFor(true);
              console.log(order);
            },
            onError: err => {
              setError(err);
              console.error(err);
            },
          })
          .render(paypalRef.current);
      }, [product.description, product.price]);


    if (paidFor) {
        return (
          <div>
            <h1>Congrats, you just bought {product.name}!</h1>
            <img alt={product.description} src={"https://64.media.tumblr.com/4ff50293f731239737d437bc2a08e0de/tumblr_pap3uowZuV1u8kt7do2_540.gifv"} />
          </div>
        );
      }
  
    return (
        <div>
            {error && <div>Uh oh, an error occurred! {error.message}</div>}
            <h1>
                {product.description} for ${product.price}
            </h1>
            <img alt={product.description} src={product.image} width="200" />
            <div ref={paypalRef} />
        </div>
    );
}
