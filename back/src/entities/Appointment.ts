import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity({ name: "appointments" })
class Appointment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;
  
  @Column()
  date!: string;

  @Column()
  time!: string;

  @Column()
  userId!: number;

  @Column({
    default: "Activa",
  })
  status!: string;

  //* Appointment N:1 User
  @ManyToOne(() => User, (user) => user.appointments)
  user!: User
}

export default Appointment;