import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/ProductTable.css"; // ✅ Import CSS

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

function Management() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(({ data }) => setProducts(data))
      .catch(() => setError("Không thể tải sản phẩm!"))
      .finally(() => setLoading(false));
  }, []);

  const onDelete = async (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      try {
        const res = await axios.delete(`http://localhost:3000/products/${id}`);
        if (res.status === 200) {
          alert("Xóa thành công!");
          setProducts(products.filter((item) => item.id !== id));
        }
      } catch (error) {
        alert("Lỗi khi xóa sản phẩm!");
      }
    }
  };

  return (
    <div className="management-container">
      <h1 className="title">📦 Quản lý sản phẩm</h1>

      <Link to="add">
        <button className="add-button">➕ Thêm sản phẩm</button>
      </Link>

      {loading ? (
        <p className="loading">🔄 Đang tải sản phẩm...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh</th>
              <th>Giá</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} className="product-image" alt={item.name} />
                </td>
                <td>{item.price.toLocaleString()} đ</td>
                <td>
                  <button className="delete-button" onClick={() => onDelete(item.id)}>
                    Xóa
                  </button>
                  <Link to={`update/${item.id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="empty">⚠️ Không có sản phẩm nào!</p>
      )}
    </div>
  );
}

export default Management;
