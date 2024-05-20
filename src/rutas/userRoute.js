import express from "express";
import {create, get, update} from "../controllers/userController.js";


const userRoute = express.Router();


//endpoints o direcciones
userRoute.post("/create", create);
userRoute.get("/getAll", get);
userRoute.put("/update/:id",update);
userRoute.delete("/detele", delete)

export default userRoute;