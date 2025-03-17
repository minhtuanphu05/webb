import React from "react";
import "./css/Sidebar.css"; // ✅ Import CSS

const Sidebar: React.FC = () => {
  const products = Array(10).fill("Sản phẩm yêu thích");

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">🔥 Top 10 yêu thích</h3>
      <ul className="sidebar-list">
        {products.map((product, index) => (
          <li key={index} className="sidebar-item">
            {product} {index + 1}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
