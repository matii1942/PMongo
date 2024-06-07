import { Router } from "express";
import { getAll, create, findOne, deleteProduct, update } from "../controllers/productController.js";
import { verifyTokenMiddeleware } from "../middlewares/verifyTokenMiddleware.js";


const productRoute = Router();

//los endpoints

productRoute.post ("/create", verifyTokenMiddeleware, create);
productRoute.get("/getAll", getAll);
productRoute.get("/findOne/:name", verifyTokenMiddeleware, findOne);
productRoute.put("/update/:id", verifyTokenMiddeleware, update);
productRoute.delete("/delete/:id", verifyTokenMiddeleware, deleteProduct);
productRoute.put("/update/_id", verifyTokenMiddeleware, update)

export default productRoute;