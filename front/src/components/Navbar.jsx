import style from "./Navbar.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const loggin = useSelector((state) => state.actualUser.userData.loggin);
  const name = useSelector((state) => state.actualUser.userData.user.name);

  return (
    <div className={style.navbar}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo MediTurnos" />
      </div>
      <div className="navbar-menu">
        <Link to="/home">
          <span className={style.fieldNavbar} href="../views/Home.jsx">
            Inicio
          </span>
        </Link>

        {loggin && (
          <Link to="/turns">
            <span className={style.fieldNavbar} href="misTurnos">
              Agenda
            </span>
          </Link>
        )}

        <Link to="/addturn">
          <span className={style.fieldNavbar} href="#addTurn">
            Agregar Cita
          </span>
        </Link>

        {!loggin && (
          <Link to="/">
            <span className={style.fieldNavbar} href="login">
              Iniciar Sesión
            </span>
          </Link>
        )}

        {loggin && (<span className={style.name}>{name}</span>)}
      </div>
    </div>
  );
};
