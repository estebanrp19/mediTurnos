import style from "./Turno.module.css"
import calendario from "../assets/calendario.svg"
import reloj from "../assets/reloj.svg"
import bandera from "../assets/bandera.svg"
import Swal from "sweetalert2"

const Turno = ({ turno, onCancel }) => {

    const handleCancel = () => {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas cancelar este turno?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, cancelar",
        cancelButtonText: "No, mantener",
      }).then((result) => {
        if (result.isConfirmed) {
          onCancel(turno.id);
        }
      });
    };
    return (
      <div className={style.container}>
        <div className={style.informacion}>
          <h2>{turno.description}</h2>
          <img src={calendario} alt="" />
          <p>{turno.date}</p>
          <img src={reloj} alt="" />
          <p>{turno.time}</p>
          <img src={bandera} alt="" />
          <p className={turno.status === 'Cancelada' ? style.cancelled : style.active}>{turno.status}</p>
        </div>

        <div className={style.containerBtn}>
          <button className={style.btnCancel} onClick={handleCancel} >Cancelar Cita</button>
        </div>
      </div>
    );
}

export default Turno;