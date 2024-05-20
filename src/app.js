import espress from "express";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import bodyParser from "body-parser";
import userRoute from "./rutas/userRoute.js";


const app = espress();
app.use(bodyParser.json());



//La conexion de mongo
connectDB();

app.get("/", (req, res) => {
    res.send("hello world")
})

//agrupamos los endpoints
app.use("/api/user", userRoute);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
} )