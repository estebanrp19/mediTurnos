import { useState } from "react";
import FormRegister from "../components/FormRegister";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const urlRegisterUsers = "http://localhost:3002/users/register";
const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    nDni: "",
    birthdate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.username || !form.password || !form.email || !form.nDni || !form.birthdate) {
      Swal.fire({
        title: "Todos los campos son requeridos",
        icon: "warning",
        timer: 3000,
        confirmButtonText: "OK",
      });
      return;
    }

    //* Validacion de correo existente => Back
    

    try {
      const response = await axios.post(urlRegisterUsers, form);
      console.log("Respuesta del servidor", response.data);
      Swal.fire({
        position: "top-end",
        title: "Usuario registrado exitosamente",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(
        "Error en la solicitud:",
        error.response ? error.response.data : error.message
      );
      Swal.fire({
        position: "top-end",
        title: "Error registrando el usuario",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <FormRegister
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Register;
