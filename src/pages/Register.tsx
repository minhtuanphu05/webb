import { Link, useNavigate } from "react-router-dom";
import "./css/Register.css";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

type ProductInput = {
  username: string;
  email:string
  password: string;
  password2: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ProductInput>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ProductInput> = async (data) => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      const checkUser = res.data.find((u: any) => u.username === data.username);

      if (checkUser) {
        alert("Tài khoản đã tồn tại!");
        return;
      }
      const checkEmail = res.data.find((u: any) => u.email === data.email);

      if (checkEmail) {
        alert("Email đã tồn tại!");
        return;
      }
      const ress = await axios.post(`http://localhost:3000/users`,data)
      if (ress.status===201 || ress.status===200) {
        alert("Đăng ký thành công")
        navigate("/login")
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi đăng nhập!");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Nhập username của bạn"
            {...register("username", { required: "Không được bỏ trống (*)" })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            {...register("email", { required: "Không được bỏ trống (*)" })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            {...register("password", {
              required: "Không được bỏ trống (*)",
              minLength: { value: 8, message: "Mật khẩu ít nhất 8 ký tự" },
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            {...register("password2",{required:"Không được bỏ trống",validate:(item)=>item===watch("password")||"Mật khẩu không trùng khớp"})}
          />
          {errors.password2 && <p className="error">{errors.password2.message}</p>}
        </div>
        <button type="submit">Register</button>
        <p>
          Chưa đã tài khoản? <Link to="/register">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
