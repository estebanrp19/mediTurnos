import style from "./ScheduleAppointment.module.css";
import medicinaDomiciliaria from "../assets/medicinaDomiciliaria.svg";
import medicinaGeneral from "../assets/medicinaGeneral.svg";
import vacunacion from "../assets/vacunacion.svg";
import recogerMedicamentos from "../assets/recogerMedicamentos.svg";
import cardiologia from "../assets/cardiologia.svg";
import otraEspecialidad from "../assets/otraEspecialidad.svg";
import { Link } from "react-router-dom";

export const ScheduleAppointment = () => {
  return (
    <div>
      <h2 className={style.title}>Puedes Programar las Siguientes Citas</h2>
      <div className={style.container}>
        <div className={style.card}>
          <p>Medicina Domiciliaria</p>
          <img src={medicinaDomiciliaria} alt="" />
        </div>

        <div className={style.card}>
          <p>Medicina General</p>
          <img src={medicinaGeneral} alt="" />
        </div>

        <div className={style.card}>
          <p>Vacunación</p>
          <img src={vacunacion} alt="" />
        </div>

        <div className={style.card}>
          <p>Recoger Medicinas</p>
          <img src={recogerMedicamentos} alt="" />
        </div>

        <div className={style.card}>
          <p>Cardiología</p>
          <img src={cardiologia} alt="" />
        </div>

        <div className={style.card}>
          <p>Otra Especialidad</p>
          <img src={otraEspecialidad} alt="" />
        </div>
      </div>
    </div>
  );
};
