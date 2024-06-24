import { useEffect } from "react";
import Turno from "../components/Turno";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../redux/userSlice";

const urlAppointments = "http://localhost:3002/turns";
const urlgetUserById = "http://localhost:3002/users/";

export const MisTurnos = () => {
  const actualUserId = useSelector(state => state.actualUser.userData.user.id);
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios
      .get(urlgetUserById + actualUserId)
      .then(response => response.data)
      .then(actualUser => {
        dispatch(setUserAppointments(actualUser.appointments));
      })
      .catch(error => console.log(error.message));
  }, [actualUserId, dispatch]);

  const turnos = useSelector(state => state.actualUser.userAppointments);
  const loggin = useSelector(state => state.actualUser.userData.loggin);
  const navigate = useNavigate();
 
  useEffect(() => {
    !loggin && navigate("/home");
  }, [loggin, navigate]);

  const handleCancelTurno = async (id) => {
    try {
      console.log("Cancelling turn with id:", id);
      await axios.put(`${urlAppointments}/${id}/cancel`);
      // Aquí no actualizamos el estado local, sino que despachamos la acción para actualizar el estado global
      dispatch(setUserAppointments(turnos.map(turno =>
        turno.id === id ? { ...turno, status: "Cancelada" } : turno
      )));
    } catch (error) {
      console.error("Error canceling turn:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1
        style={{
          textAlign: "left",
          margin: "20px 220px",
          fontFamily: "Helvetica",
          fontSize: "25px",
          fontWeight: "600",
        }}
      >
        Citas Médicas Pendientes
      </h1>

      {turnos.map((turno) => (
        <Turno key={turno.id} turno={turno} onCancel={() => handleCancelTurno(turno.id)} />
      ))}
    </div>
  );
};
