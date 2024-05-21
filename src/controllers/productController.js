import Product from "../models/productModel.js";

//traemos los productos creados
export const getAll = async (req, res) => {
    try {
        const products = await product.find();
        if (products.lenght === 0){
            return res.status(404).json ({message: "No se encontro el producto"})
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json ({message: "Error en el Server"})
    }
    
}
//creacion del producto
export const create = async (req, res) =>{
    try {
        const productData = new Product(req.body);
        const {name} = productData;
        const productExist = await Product.findone({name})
        if (productExist){
            return res.status(400).json ({ message: `producto ${name} ya existe`})
        }
        const savedProduct = await productData(save)
        res.status(200).json(savedProduct)
            

    } catch (error) {
        res.status(500).json({message: "Error en el Server", error})
    }
};

//buscamos el producto uno a la vez

export const findOne = async (req, res) => {
    try {
        const {name} = req.body;
        const productExist = await Product.findOne({name});
        if (productExist){
          return res.status(400).json ({message: `El producto ${name} no existe`})
    }
    res.status(200).json (productExist)
        
    } catch (error) {
        res.status(500).json({message:"Error interno en el server",error })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const productExist = await Product.findOne({_id:id});
        if (!productExist){
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        const updateProduct = await Product.findByIdAndUpdate({_id:id}, req.body,{new:true});
        res.status(201).json(updateProduct);
    } catch (error) {
        res.status(500).json({message: "Error en el Server"})
    }
}

export const deleteProduct = async (req, res) =>{
    try {
        const id =req.params.id
        const productExist = await Product.findOne({_id:id})
        if (!productExist){
            return res.status (404).json ({ message: " Producto no encontrado"})
        } 
        await Product.findByIdAndDelete(id);
        res.status(201).json({message: "Producto borrado"})
    } catch (error) {
        res.status(500).json({message:"Error interno en el server"})
    }
}