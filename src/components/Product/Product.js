import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
     const { name, img, price, seller, star, starCount, stock } = props.product;
     const productBtnHandler = props.productBtnHandler;
     return (
          <div>
               <div className="product">
                    <div className="product-img">
                         <img src={img} alt="" />
                    </div>
                    <div className="product-details">
                         <h3>{name}</h3>
                         <p>By: {seller}</p>
                         <p>Availability: {stock > 0 ? <span className="in-stock">In Stock</span>: <span className="out-stock">Out of Stock</span>}</p>
                         <p className="product-price">Price: ${price}</p>
                         <div>
                              <Rating
                                   readonly
                                   initialRating={star}
                                   emptySymbol="far fa-star"
                                   fullSymbol="fas fa-star"
                                   className="ratings"
                              ></Rating>
                              <span> ({starCount})</span>
                         </div>
                         <button className="common-btn" onClick={()=> productBtnHandler(props.product)}>Add to cart</button>
                    </div>
               </div>
          </div>
     );
};

export default Product;