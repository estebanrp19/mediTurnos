import { Request, Response } from "express";
import { getAllAppointments, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentsService";
import { messages } from "../commons/messages";

export const getAllAppoinments = async (req: Request, res: Response) => {
  try {
    const allAppointments = await getAllAppointments();
    res.status(200).json(allAppointments)
  } catch (error: any) {
      res.status(404).json(messages.error.noTurns);
  }
};

export const getAppoinmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json(messages.error.turnNotFound);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const scheduleAppoinment = async (req: Request, res: Response) => {
  try {
    const { userId, date, time, description } = req.body;
    if (!userId || !date || !time || !description) {
      return res.status(400).json({message: "El ID del usuario, la fecha y la hora son requeridos"});
    }
    const newAppointment = await createAppointmentService({
      userId,
      description,
      date,
      time,
    });
    res.status(201).json(newAppointment);
  } catch (error: any) {
    res.status(404).json(messages.error.incorrectData);
  }
};

export const cancelAppoinment = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const appointment = await cancelAppointmentService(Number(id));
      if (appointment) {
        res.status(200).json({ message: "Turno cancelado", appointment });
      } else {
        res.status(404).json(messages.error.turnNotFound);
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
};
