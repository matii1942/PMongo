import mongoose from "mongoose";

const statusEnum = ["DISPONIBLE", "VENDIDO", "RECHAZADO"];

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nombre de producto requerido"],
    minLength: 3,
    unique: true,
    lowercase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Precio de producto requerido"],
    min: [0, "Precio del producto debe tener numero"],
  },

  description: String,
  quantity: Number,
  status: {
    type: String,
    validate: {
      validator: function (v) {
        return statusEnum.includes(v);
      },
      message: props => `${props.value} no es un estado valido`,
    },
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  destacado: Boolean,
});

productSchema.set("toJSON", { getters: true, setters: true });
export default mongoose.model("product", productSchema);