import React, { useEffect } from "react";
import "./css/AddProduct.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

type ProductsInput = {
  name: string;
  image: string;
  price: number;
};

function Edit() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductsInput>();

  const navigate = useNavigate();

  // Lấy dữ liệu sản phẩm hiện tại
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then(({ data }) => reset(data))
      .catch(() => alert("Không tìm thấy sản phẩm!"));
  }, [id, reset]);

  const onEdit: SubmitHandler<ProductsInput> = async (data) => {
    try {
      const res = await axios.put(`http://localhost:3000/products/${id}`, data);
      if (res.status === 200) {
        alert("Cập nhật sản phẩm thành công!");
        navigate("/admin/management");
      }
    } catch (error: any) {
      alert(`Lỗi: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Chỉnh sửa sản phẩm</h2>
      <form onSubmit={handleSubmit(onEdit)}>
        <div className="form-group">
          <label>Tên sản phẩm</label>
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            {...register("name", { required: "Không được để trống!", minLength: 3 })}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>Ảnh sản phẩm</label>
          <input
            type="text"
            placeholder="Nhập URL ảnh"
            {...register("image", { required: "Không được để trống!" })}
          />
          {errors.image && <p className="error-message">{errors.image.message}</p>}
        </div>

        <div className="form-group">
          <label>Giá sản phẩm</label>
          <input
            type="number"
            placeholder="Nhập giá sản phẩm"
            {...register("price", { required: "Không được để trống!", min: 1000 })}
          />
          {errors.price && <p className="error-message">{errors.price.message}</p>}
        </div>

        <button type="submit">Cập nhật sản phẩm</button>
      </form>
    </div>
  );
}

export default Edit;
