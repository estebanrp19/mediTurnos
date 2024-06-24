import ICreateAppointmentDto from "../interfaces/ICreateAppointmentDto";
import { appointmentModel } from "../repositories";
import Appointment from "../entities/Appointment";

export const getAllAppointments = async (): Promise<Appointment[]> => {
  return await appointmentModel.find();
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment | undefined> => {
  const appointment = await appointmentModel.findOne({ where: { id } });
  return appointment || undefined;
};

export const createAppointmentService = async (
  createAppointmentDto: ICreateAppointmentDto
): Promise<Appointment> => {
  if (!createAppointmentDto.userId) {
    throw new Error("User ID is required to create an appointment.");
  }

  const newAppointment = appointmentModel.create({
    description: createAppointmentDto.description,
    date: createAppointmentDto.date,
    time: createAppointmentDto.time,
    userId: createAppointmentDto.userId,
    status: "active",
  });

  await appointmentModel.save(newAppointment);
  return newAppointment;
};

export const cancelAppointmentService = async (
  id: number
): Promise<Appointment | undefined> => {
  const appointment = await appointmentModel.findOne({ where: { id } });
  if (appointment) {
    appointment.status = "Cancelada";
    await appointmentModel.save(appointment);
  }
  return appointment || undefined; 
};