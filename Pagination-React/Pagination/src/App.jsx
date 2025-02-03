import { useEffect, useState } from "react";
import "./App.css";

const PAGE_SIZE = 10;

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <span>{title}</span>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const total = products.length;
  const cntOfPage = total / PAGE_SIZE;

  return !products || products.length === 0 ? (
    <h1>No Products</h1>
  ) : (
    <div className="App">

      {/* logic for the pagination component : look and feel*/}
      <div className="pagination-container">
        {[...Array(10).keys()].map((n) => (
          <span className="page-number">{n}</span>
        ))}
      </div>

      {/* here we are loading all the cards */}
      <div className="container">
        {products.map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
