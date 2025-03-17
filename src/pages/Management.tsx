import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ProductTable.css"
import { Link } from "react-router-dom";
type Products ={
    id: number;
  name: string;
  image: string;
  price: number;
}
function Management() {
    const [products,setProducts] = useState<Products[]>([])
    const [loading,setLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3001/products`)
        .then(({data})=>setProducts(data))
        .catch(()=>alert("ko tim thay sp !"))
        .finally(()=>setLoading(false))
    },[])
    const onDelete = async (id:number)=>{
        if (window.confirm("xoa ?")) {
            try {
                const res = await axios.delete(`http://localhost:3001/products/${id}`)
                if (res.status===200) {
                    alert("xoa thanh cong")
                    setProducts(products.filter((item=>item.id!==id)))
                }
            } catch (error) {
                alert(error)            
            }
        }
    }
    return (
        <div>
            <h1 style={{color:"green"}}>Quản lý sản phẩm</h1>
            <Link to={`add`}><button>Add Product</button></Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length ? products.map((item,index)=>(

                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{width:"100px",height:"100px",objectFit:"cover"}} alt="" /></td>
                            <td>{item.price}</td>
                            <td>
                            <button onClick={()=>onDelete(item.id)}>xoa</button>
                            <Link to={`update/${item.id}`}><button>Edit</button></Link>
                            </td>
                        </tr>
                    )):( <p>ko con sp nao !</p> )}
                </tbody>
            </table>
        </div>
    )
}

export default Management