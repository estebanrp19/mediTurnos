import FormAddTurn from "../components/FormAddTurn";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const urlScheduleTurn = "http://localhost:3002/turns/schedule";

const AddTurn = () => {

  const actualUserId = useSelector((state) => state.actualUser.userData.user.id);

  const [form, setForm] = useState({
    description: "",
    date: "",
    time: "",
    status: "Activa",
    userId: `${actualUserId}`,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.description || !form.date || !form.time) {
      Swal.fire({
        title: "Todos los campos son requeridos",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await axios.post(urlScheduleTurn, form);

      Swal.fire({
        position: "top-end",
        title: "Turno registrado exitosamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "top-end",
        title: "Error registrando el turno",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <FormAddTurn
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddTurn;
