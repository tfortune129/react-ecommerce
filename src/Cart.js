// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from './AuthContext';

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [total, setTotal] = useState(0);
//   const { user } = useAuth();

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/cart/${user.id}`);
//         setCart(res.data);
//         setTotal(res.data.reduce((acc, curr) => acc + curr.price, 0));
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };
//     fetchCart();
//   }, [user]);

//   const handleRemoveFromCart = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:5000/cart/${user.id}/${productId}`);
//       setCart(cart.filter((p) => p.id !== productId));
//       setTotal(total - cart.find((p) => p.id === productId).price);
//     } catch (error) {
//       console.error(error);
//       alert('Error removing product from your cart.');
//     }
//   };

//   const handleClearCart = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/cart/${user.id}`);
//       setCart([]);
//       setTotal(0);
//     } catch (error) {
//       console.error(error);
//       alert('Error clearing your cart.');
//     }
//   };

//   return (
//     <div className="cart">
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <h2>Your cart</h2>
//           <ul>
//             {cart.map((product) => (
//               <li key={product.id}>
//                 {product.name} ({product.price}$)
//                 <button onClick={() => handleRemoveFromCart(product.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div>Total: {total}$</div>
//           <button onClick={handleClearCart}>Clear cart</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
