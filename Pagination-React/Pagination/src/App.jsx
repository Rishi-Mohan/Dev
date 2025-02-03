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
  const [currentPage, setCurrentPage] = useState([0]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const total = products.length;
  const cntOfPage = Math.ceil(total / PAGE_SIZE);

  console.log(cntOfPage);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const moveToPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const moveToNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return !products || products.length === 0 ? (
    <h1>No Products</h1>
  ) : (
    <div className="App">
      {/* logic for the pagination component : look and feel*/}
      <div className="pagination-container">
        <button
          disabled={currentPage === 0}
          className={`page-number `}
          onClick={() => moveToPrev()}
        >
          {" "}
          ⬅️{" "}
        </button>
        {[...Array(cntOfPage).keys()].map((n) => (
          <button
            className={`page-number ${currentPage == n ? "active" : ""} `}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === cntOfPage - 1}
          className="page-number"
          onClick={() => moveToNext()}
        >
          {" "}
          ➡️{" "}
        </button>
      </div>

      {/* here we are loading all the cards */}
      <div className="container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
