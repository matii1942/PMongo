import { Router } from "express";
import { getAll, create, findOne, deleteProduct, update } from "../controllers/productController.js";


const productRoute = Router();

//los endpoints

productRoute.post ("/create", create);
productRoute.get("/getAll", getAll);
productRoute.get("/findOne/:name", findOne);
productRoute.put("/update/:id", update);
productRoute.delete("/delete/:id", deleteProduct);

export default productRoute;