import espress from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./rutas/userRoute.js";


const app = espress();
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGOURI = process.env.MONGODB_URI;

mongoose.connect(MONGOURI).then(() => {
    console.log("Database Connected")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
).catch(error => console.log(error));

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/user", userRoute);
