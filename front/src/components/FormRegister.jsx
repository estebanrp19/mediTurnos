import style from "./FormRegister.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";

const FormRegister = ({ form, handleChange, handleSubmit }) => {
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        timer: 3000,
        text: "Las contraseñas no coinciden",
      });
    } else {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <div className={style.logoContainer}>
        <img src={logo} alt="" className={style.logo} />
      </div>

      <form className={style.container} onSubmit={handleFormSubmit}>
        <h2>Registro de Usuario</h2>

        <div className={style.field}>
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className={style.field}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className={style.field}>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className={style.field}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className={style.field}>
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className={style.field}>
          <label htmlFor="nDni">DNI</label>
          <input
            type="text"
            id="nDni"
            name="nDni"
            value={form.nDni}
            onChange={handleChange}
          />
        </div>

        <div className={style.field}>
          <label htmlFor="birthdate">Fecha de Nacimiento</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={form.birthdate}
            onChange={handleChange}
          />
        </div>

        <div className={style.containerBtn}>
          <input className={style.button} type="submit" value="Registrarme" />
        </div>
        <p>
          ¿Ya tienes cuenta? <Link to="/">Inicia Sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default FormRegister;
