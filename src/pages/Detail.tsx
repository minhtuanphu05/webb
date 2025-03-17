import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/Detail.css"; // ✅ Thêm file CSS riêng

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch(() => {
        setProduct(null);
        setError("Sản phẩm không tồn tại!");
        setTimeout(() => navigate("/"), 3000); // Chuyển hướng sau 3 giây
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  return (
    <div className="detail-container">
      <h1>Chi tiết sản phẩm</h1>

      {loading ? (
        <p className="loading">🔄 Đang tải sản phẩm...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : product ? (
        <div className="product-detail">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>
            <strong>Mã sản phẩm:</strong> {product.id}
          </p>
          <p>
            <strong>Giá:</strong> {product.price.toLocaleString()} đ
          </p>
          <Link to="/">
            <button className="back-button">Quay lại</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Detail;
