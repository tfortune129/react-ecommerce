import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    fetchProducts();
    useEffect(() => {
      const fetchProducts = async () => {
        const res = await axios.get("/api/products");
        setProducts(res.data);
      };
      fetchProducts();
    
      const addExampleProducts = async () => {
        const appleAccessories = [
          {
            name: "Apple AirPods Pro",
            description: "Wireless earbuds with active noise cancellation",
            price: "219.00",
          },
          {
            name: "Apple Magic Keyboard",
            description: "Wireless keyboard with numeric keypad",
            price: "149.00",
          },
          {
            name: "Apple Pencil",
            description: "Stylus for iPad and iPhone",
            price: "99.00",
          },
        ];
    
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        for (const accessory of appleAccessories) {
          const body = JSON.stringify(accessory);
          await axios.post("/api/products", body, config);
        }
      };
    
      addExampleProducts();
    }, []);
    
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      setErrors({
        name: !name ? "Name is required" : "",
        description: !description ? "Description is required" : "",
        price: !price ? "Price is required" : "",
      });
      return;
    }

    try {
      const newProduct = {
        name,
        description,
        price,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(newProduct);

      const res = await axios.post("/api/products", body, config);

      setProducts([...products, res.data]);
      setName("");
      setDescription("");
      setPrice("");
    } catch (err) {
      setErrors({
        ...errors,
        server: err.response.data,
      });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && <p>{errors.description}</p>}
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <p>{errors.price}</p>}
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <a href={`/products/${product._id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;

