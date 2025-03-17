import axios from "axios";
import { useEffect, useState } from "react";
import "./css/Home.css"
import { Link } from "react-router-dom";
type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // ✅ Thêm state để quản lý trạng thái loading

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then(({ data }) => setProducts(data))
      .catch(() => alert("Không thể tải sản phẩm!"))
      .finally(() => setLoading(false)); // ✅ Khi hoàn thành, set loading về false
  }, []);

  return (
    <div>
      <h2 style={{ color: "black" }}>Flash Sale</h2>

     { loading ? ( // ✅ Hiển thị loading khi dữ liệu chưa tải xong
        <p>Đang tải sản phẩm...</p>
      ) : (
        
            <div className="container">
                {products.map((item) => (
                    <div key={item.id} className="product-item">
                    <Link to={`/detail/${item.id}`}> 
                        <img src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>{item.price.toLocaleString()} đ</p>
                    </Link>
                    <button>Mua</button>
                </div>
                    

                ))}
            </div>
        

      )}
    </div>
  );
}

export default Home;
