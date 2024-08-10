import React from 'react';
import './Cart.css'

const Cart = (props) => {
     console.log(props.cart)
     const totalItem = props.cart.length;
     let itemsPrice = 0;
     let shipping = 0;
     let productQuantity = 0;
     for (const product of props.cart) {
          if (!product.quantity) {
               product.quantity = 1;
          } 
          itemsPrice += product.price * product.quantity;
          shipping += product.shipping * product.quantity;
          productQuantity = productQuantity + product.quantity;
     }
     let totalBeforeTax = itemsPrice + shipping;
     let tax = itemsPrice * .1;
     let total = totalBeforeTax + tax;
     return (
          <div className="cart">
               <h3>Order Summry</h3>
               <p>Items ordered: {productQuantity}</p>
               <table>
                    <tbody>
                    <tr>
                         <td>Items Price:</td>
                         <td>${itemsPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                         <td>Shipping & Handling:</td>
                         <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                         <td>Total before tax:</td>
                         <td>${totalBeforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                         <td>Estimated Tax:</td>
                         <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="total-price">
                         <td>Total:</td>
                         <td>${total.toFixed(2)}</td>
                    </tr>
                    </tbody>
               </table>
               <button className="common-btn">Review Your order</button>
          </div>
     );
};

export default Cart;