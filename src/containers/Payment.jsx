import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

export default function Payment({ history }) {

  const {state, addNewOrder} = useContext(AppContext);

  const {cart, buyer} = state;

  const paypalOptions = {
    clientId: 'AbexMo9Gp3ezHaMVGAdfZvi7hzWWq1lG67L6DTW_iNCqovU-aLPQFS_FryJTNIN7OY4jc8jDmTSXkczm',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={handleSumTotal()}
          onStart={() => console.log('Start Payment')}
          onSuccess={data => handlePaymentSuccess(data)}
          onError={error => console.log(error)}
          onCancel={data => console.log(data)}
        />
        </div>
      </div>
      <div/>
    </div>
  )
}
