import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCart, setdb } from '../../utilities/localdb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
     const [products, setProducts] = useState([]);
     const [searchedProduct, setSearchedProduct] = useState([]);
     const [cart, setCart] = useState([]);
     useEffect(() => {
          fetch('./products.JSON')
               .then(res => res.json())
               .then(data => {
                    setProducts(data);
                    setSearchedProduct(data);
               })
     }, []);

     useEffect(() => {
          const localStoredCart = getCart();
          if (products.length) {
               const storedProduct = [];
               for (const key in localStoredCart) {
                    const findProduct = products.find(product => product.key === key);
                    if (findProduct) {
                         const quantity = localStoredCart[key];
                         findProduct.quantity = quantity;
                         storedProduct.push(findProduct);
                    }
                    setCart(storedProduct); 
               }
          }
     }, [products])

     const productBtnHandler = (product) => {
          const newCart = [...cart , product]
          setCart(newCart);
          setdb(product.key);
     }


     const filterProduct = e => {
          const searchText = e.target.value;
          const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
          setSearchedProduct(matchedProducts)
     }
     return (
          <main>
               <div className="search-field">
                    <input type="text" onChange={filterProduct} placeholder="Search product by product name"/>
               </div>
               <div className="container shop">
                    <div className="products">
                         {
                              searchedProduct.map(product => <Product
                                   product={product}
                                   key={product.key}
                                   productBtnHandler={productBtnHandler}
                              ></Product>)
                         }
                    </div>
                    <Cart cart={cart}></Cart>
               </div>
          </main>
     );
};

export default Shop;