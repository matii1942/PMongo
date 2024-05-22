import express from "express";
import {create, get, update, destroyed} from "../controllers/userController.js";
import { verifyTokenMiddeleware } from "../middlewares/verifyTokenMiddleware.js";


const userRoute = express.Router();


//endpoints o direcciones
userRoute.post("/create", create);
userRoute.get("/getAll", verifyTokenMiddeleware, get);
userRoute.put("/update/:id",update);
userRoute.delete("/destroyed/:id", destroyed)

export default userRoute;