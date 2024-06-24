import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "credentials" })
class Credential {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    //* Credential 1:1 User
}

export default Credential;