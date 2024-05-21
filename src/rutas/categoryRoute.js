import { Router } from "express";
import { getAll, create } from "../controllers/categoryController.js";


const categoryRoute = Router();

categoryRoute.get("/getAll", getAll);


export default categoryRoute;