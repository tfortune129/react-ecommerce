// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from './AuthContext';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user, isAuthenticated } = useAuth();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/products');
//         setProducts(res.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleAddToCart = async (productId) => {
//     if (!isAuthenticated) {
//       alert('Please log in to add products to your cart.');
//       return;
//     }

//     try {
//       await axios.post(`http://localhost:5000/cart`, {
//         userId: user.id,
//         productId,
//       });
//       alert('Product added to your cart.');
//     } catch (error) {
//       console.error(error);
//       alert('Error adding product to your cart.');
//     }
//   };

//   return (
//     <div className="product-list">
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>
//               {product.name}
//               <button onClick={() => handleAddToCart(product.id)}>
//                 Add to cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductList;

