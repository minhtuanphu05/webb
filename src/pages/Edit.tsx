import React, { useEffect } from 'react'
import "./css/AddProduct.css"
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
type ProductsInput = {
    name:string,
    image:string,
    price:number
}
function Edit() {
    const {id} = useParams()
    const {
        register,
        handleSubmit,
        formState : {errors},
        reset
    }= useForm<ProductsInput>()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3001/products/${id}`)
        .then(({data})=>reset(data))
        .catch(()=>alert("o tm thay sp !"))
    },[id,reset])
    const onEdit = async (data:ProductsInput)=>{
        try {
            const res = await axios.put(`http://localhost:3001/products/${id}`,data)
            if (res.status===200) {
                alert("edit thanh cong")
            }
        } catch (error) {
            alert(error)
        }
    }
  return (
    
    <div className="form-container">
      <h2>Edit Sản Phẩm</h2>
      <form onSubmit={handleSubmit(onEdit)}>
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
        <button type="submit">Edit sản phẩm</button>
      </form>
    </div>
  )
}

export default Edit