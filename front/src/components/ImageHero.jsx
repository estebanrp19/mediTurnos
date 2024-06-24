import style from "./ImageHero.module.css"
import imageHero from "../assets/01.jpg"

export const ImageHero = () => {
    return (
      <div className={style.container}>
        <img src={imageHero} alt="" />

        <h2>Gestión de Citas Médicas Online</h2>
      </div>
    );
}