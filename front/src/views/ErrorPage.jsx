import style from "./ErrorPage.module.css";
import logo from "../assets/logo.png";

const ErrorPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <img src={logo} alt="" />
      </div>
      <h1>404 / Not Found</h1>
    </div>
  );
};

export default ErrorPage;
