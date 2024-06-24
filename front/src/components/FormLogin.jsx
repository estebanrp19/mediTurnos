import style from "./FormLogin.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const FormLogin = ({ form, handleChange, handleSubmit }) => {
  return (
    <div>
      <div className={style.logoContainer}>
        <img src={logo} alt="" className={style.logo} />
      </div>

      <form className={style.container} onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

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
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className={style.containerBtn}>
          <input
            className={style.button}
            type="submit"
            value="Iniciar Sesión"
          />
        </div>

        <p>
          ¿No tienes cuenta aún?{" "}
          <Link to="/register">
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormLogin;
