import { useState } from "react";
import FormLogin from "../components/FormLogin";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const urlLoginUsers = "http://localhost:3002/users/login";

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(urlLoginUsers, form);
      const data = response.data;

      
      Swal.fire({
        position: "top-end",
        title: "Inicio de sesión exitoso",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
        
      dispatch(setUserData(data))
      setIsLoggedIn(true);

    } catch (error) {
      Swal.fire({
        position: "top-end",
        title: "Revisa tus credenciales y vuelve a intentarlo",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <FormLogin
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
