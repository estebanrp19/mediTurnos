import express from "express"
import "reflect-metadata"
import { DB_PORT, PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";
import cors from 'cors'
const usersRouter = require("./routes/usersRoutes");
const appoinmentsRouter = require("./routes/appoinmentsRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);
app.use("/turns", appoinmentsRouter)


AppDataSource.initialize()
  .then(() => {
    console.log(`Database connected on por ${DB_PORT}`);
    
    app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  })
  .catch((error) => console.log(error))


export default app;
