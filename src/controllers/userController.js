import User from "../models/userModel.js"


export const create = async (req, res) => {
    try { 
        //tomamos los datos del body
        const userData = new User(req.body);
        
        //busco si existe el usuario con destructuracion
        const {email} = userData;
        const userExist = await User.findOne({email: email});
        if (userExist) {
            return res.status(400).json({message: `User ${email} already exist`})
        }
        //valido si existe el usuario
        //guardo el usuario
        const saveUser = await userData.save();
       
        //muestro informacion del usuario
        res.status(200).json(saveUser);

    } catch (error) {
        res.status(500).json ({error: "No se puede encontrar los usuarios"});
        
    }
};

export const get = async (req, res) => {
    try {
        const users = await User.find();
        if (users.lenght === 0){
            return res.status(404).json({message : "no hay usuarios"});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:  "Error interno en el servidor"})
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        const userExist= await User.findOne({_id: id});
        if (!userExist) {
            return res.status(404).json ({message:"Usuario no encontrado"});
        }
        const updateUser = await User.findByIdAndUpdate({_id:id}, req.body, {
            new:true});
            res.status(201).json(updateUser);
        
    } catch (error) {
        res.status(500).json
({error: "Error interno en el servidor"})        
    }
}

export const destroyed = async (req, res) => {
    try {
        const _id = req.params.id
        const userExist = await User.findeone({_id});
    if (!userExist) {
        return res.status(404).json ({message: "El usuario no a sido encontrado"});
    }
    await User.findByIdAndDelete(_id)
    res.status(201).json({message: "El usuario fue borrado exitosamente"})
    } catch (error) {
        res.status(500).json ({message: "Error interno en el server"})
    }
};