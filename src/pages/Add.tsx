import React from "react";
import "./css/AddProduct.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type ProductsInput = {
  name: string;
  image: string;
  price: number;
};

function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductsInput>();

  const navigate = useNavigate();

  const onAdd: SubmitHandler<ProductsInput> = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/products", data);
      if (res.status === 201 || res.status === 200) {
        alert("Thêm sản phẩm thành công!");
        navigate("/admin/management");
      }
    } catch (error: any) {
      alert(`Lỗi: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="form-group">
          <label>Tên sản phẩm</label>
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            {...register("name", { required: "Không được bỏ trống!", minLength: 3 })}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>Ảnh sản phẩm</label>
          <input
            type="text"
            placeholder="Nhập URL ảnh"
            {...register("image", { required: "Không được bỏ trống!" })}
          />
          {errors.image && <p className="error-message">{errors.image.message}</p>}
        </div>

        <div className="form-group">
          <label>Giá sản phẩm</label>
          <input
            type="number"
            placeholder="Nhập giá sản phẩm"
            {...register("price", { required: "Không được bỏ trống!", min: 1000 })}
          />
          {errors.price && <p className="error-message">{errors.price.message}</p>}
        </div>

        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
}

export default Add;
