import { Router } from "express";
import { getAll, create } from "../controllers/categoryController.js";
import { verifyTokenMiddeleware } from "../middlewares/verifyTokenMiddleware.js";


const categoryRoute = Router();

categoryRoute.get("/getAll", getAll);
categoryRoute.post("/create", verifyTokenMiddeleware, create);


export default categoryRoute;