import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

type ProductInput = {
  username: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInput>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ProductInput> = async (data) => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      const checkUser = res.data.find((u: any) => u.username === data.username);

      if (!checkUser) {
        alert("Tài khoản không tồn tại!");
        return;
      }

      if (checkUser.password !== data.password) {
        alert("Mật khẩu không chính xác!");
        return;
      }

      const fakeToken = `${checkUser.username}`;
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(checkUser));

      alert("Đăng nhập thành công!");
      navigate("/admin");
    } catch (error) {
      alert("Đã xảy ra lỗi khi đăng nhập!");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng Nhập</h2>
        <div className="input-group">
          <label>Tên đăng nhập:</label>
          <input type="text" placeholder="Nhập username" {...register("username",{required:"Không được bỏ trống (*)"})} />
            {errors.username && <p>{errors.username.message}</p> }
        </div>
        <div className="input-group">
          <label>Mật khẩu:</label>
          <input type="password" placeholder="Nhập mật khẩu"  {...register("password",{required:"Không được bỏ trống (*)"})} />
          {errors.password && <p>{errors.password.message}</p> }

        </div>
        <button type="submit">Đăng Nhập</button>
        <p>
          Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
