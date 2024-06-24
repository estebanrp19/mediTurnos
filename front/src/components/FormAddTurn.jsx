import style from "./FormAddTurn.module.css";

const specialties = [
  "Seleccione --",
  "Medicina General / Medicina Familiar",
  "Pediatría",
  "Ginecología y Obstetricia",
  "Cardiología",
  "Dermatología",
  "Oftalmología",
  "Otorrinolaringología",
  "Endocrinología",
  "Gastroenterología",
  "Ortopedia",
  "Neurología",
  "Psicología y Psiquiatría",
  "Urología",
  "Nefrología",
  "Oncología",
  "Hematología",
  "Reumatología",
  "Neumología",
  "Nutrición",
  "Fisioterapia y Rehabilitación",
  "Odontología",
];

const FormAddTurn = ({ form, handleChange, handleSubmit }) => {
  return (
    <div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <h2>Añadir Cita Médica</h2>

        <div className={style.field}>
          <label htmlFor="description">Especialidad</label>
          <select
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
          >
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        <div className={style.field}>
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <div className={style.field}>
          <label htmlFor="time">Hora</label>
          <input
            type="text"
            id="time"
            name="time"
            value={form.time}
            placeholder="Formato: 14:00"
            onChange={handleChange}
          />
        </div>

        <div className={style.containerBtn}>
          <input className={style.button} type="submit" value="Añadir Cita" />
        </div>
      </form>
    </div>
  );
};

export default FormAddTurn;
