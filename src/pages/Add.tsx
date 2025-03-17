import React from 'react'
import "./css/AddProduct.css"
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
type ProductsInput = {
    name:string,
    image:string,
    price:number
}
function Add() {
    const {
        register,
        handleSubmit,
        formState : {errors}
    }= useForm<ProductsInput>()
    const navigate = useNavigate()
    const onAdd : SubmitHandler<ProductsInput> = async (data)=>{
        try {
            const res = await axios.post(`http://localhost:3001/products`,data)
            if (res.status===201 || res.status===200) {
                alert("add thanh cong")
            }
        } catch (error) {
            alert(error)
        }
    }
  return (
    
    <div className="form-container">
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="form-group">
          <label>Tên sản phẩm</label>
          <input type="text" placeholder="Nhập tên sản phẩm" {...register("name",{required:"ko dc bo trong(*)"})} />
          {errors.name && <p>{errors.name.message}</p> }
        </div>
        <div className="form-group">
          <label>Ảnh sản phẩm</label>
          <input type="text" placeholder="Nhập URL ảnh"{...register("image",{required:"ko dc bo trong(*)"})}  />
          {errors.image && <p>{errors.image.message}</p> }

        </div>
        <div className="form-group">
          <label>Giá sản phẩm</label>
          <input type="number" placeholder="Nhập giá sản phẩm"{...register("price",{required:"ko dc bo trong(*)"})}  />
          {errors.price && <p>{errors.price.message}</p> }

        </div>
        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  )
}

export default Add