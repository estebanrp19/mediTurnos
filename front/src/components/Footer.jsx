import style from "./Footer.module.css";
import logo from "../assets/soloLogo.png";
import phone from "../assets/telefono.svg";
import email from "../assets/email.svg";

export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={style.derechos}>
        <p>&copy; 2024 MediTurnos. Todos los derechos reservados.</p>
      </div>

      <div className={style.contacto}>
        <div>
          <img src={phone} alt="" />
          <p>+57 (315) 244-7623</p>
        </div>

        <div>
          <img src={email} alt="" />
          <p>info@mediturnos.com.co</p>
        </div>
      </div>
    </div>
  );
};
