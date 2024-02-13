import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchProducts() {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    console.log(data && data.products);

    if (data && data.products) {
      setProducts(data.products);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <p>Hello Word</p>
    </>
  );
}

export default App;
