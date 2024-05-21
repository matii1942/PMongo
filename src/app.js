import espress from "express";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import bodyParser from "body-parser";
import userRoute from "./rutas/userRoute.js";
import productRoute from "./rutas/productRoute.js";



const app = espress();
app.use(bodyParser.json());



//La conexion de mongo
connectDB();

app.get("/", (req, res) => {
    res.send("hello world")
})

//ruta de los user
app.use("/api/user", userRoute);

//ruta de los productos
app.use("/api/product", productRoute);

app.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
} )