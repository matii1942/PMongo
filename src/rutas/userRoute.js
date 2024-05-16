import express from "express";
import {create} from "../controllers/userController.js";
import { get } from "mongoose";

const userRoute = express.Router();

userRoute.post("/create", create);
userRoute.get("/getAll", get);

export default userRoute;