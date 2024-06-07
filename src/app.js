import espress from "express";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import bodyParser from "body-parser";
import userRoute from "./rutas/userRoute.js";
import productRoute from "./rutas/productRoute.js";
import categoryRoute from "./rutas/categoryRoute.js";
import { engine } from "express-handlebars";



const app = espress();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//template engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

//La conexion de mongo
connectDB();

app.get("/", (req, res) => {
    res.render("home");
});

//ruta de los user
app.use("/api/user", userRoute);

//ruta de los productos
app.use("/api/product", productRoute);

//rutas de categorias

app.use("/api/category", categoryRoute)

app.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
} )