import mongoose from "mongoose";
import { isGoodPassword } from "../utils/validators.js";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({

    nombre: {
        type: String,
        require: true,
    },

    apellido: {
        type: String,
        required: true,

    },

    carrera: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        validate: {
          validator: function (value) {
            return isGoodPassword(value);
          },
          message:
            "La contraseña debe tener entre 6 y 12 caracteres, un digito numerico, una letra minuscula, una letra mayuscula",
        },
    },
});

userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  });

export default mongoose.model("user", userSchema);