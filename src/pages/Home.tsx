import axios from "axios";
import { useEffect, useState } from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then(({ data }) => setProducts(data))
      .catch(() => setError("Không thể tải sản phẩm!"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home-container">
      <h2 className="title">🔥 Flash Sale 🔥</h2>

      {loading ? (
        <p className="loading">🔄 Đang tải sản phẩm...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="container">
          {products.map((item) => (
            <div key={item.id} className="product-item">
              <Link to={`/detail/${item.id}`} className="product-link">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.price.toLocaleString()} đ</p>
              </Link>
              <button className="buy-button">Mua ngay</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
