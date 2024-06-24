export enum IAppointmentStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled"
}

interface IAppointment {
    id: number;
    description: string;
    date: string;
    time: string;
    userId: number;
    status: IAppointmentStatus;
}

export default IAppointment;