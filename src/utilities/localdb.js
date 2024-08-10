const setdb = (key) => {
     const exist = getdb();
     let cart = {};
     if (exist) {
          cart = JSON.parse(exist);
          if (cart[key]) {
               cart[key]++
          }
          else {
               cart[key] = 1;
          }
     } else {
          cart[key] = 1;
     }
     updatedb(cart)
}
const getdb = () => localStorage.getItem('cart');

const updatedb = (cart) => {
     localStorage.setItem('cart', JSON.stringify(cart))
}

const getCart = () => {
     const localData = getdb()
     return localData? JSON.parse(localData): {}
}
export { getdb, setdb, updatedb, getCart };