import express from "express";
import {create, get, update, destroyed, validate, updateView} from "../controllers/userController.js";
import { verifyTokenMiddeleware } from "../middlewares/verifyTokenMiddleware.js";


const userRoute = express.Router();


//endpoints o direcciones
userRoute.post("/create", create);
userRoute.get("/getAll", get);
userRoute.put("/update/:id", update);
userRoute.delete("/destroyed/:id", destroyed)
userRoute.get("/login", validate)

//Vista
userRoute.get("/create", (req, res) =>{
    res.render("create");
})
userRoute.get("/getAll", get);
userRoute.get("/update/_id", updateView);


export default userRoute;


