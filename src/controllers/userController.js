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
        res.status(500).json ({error: "No se puedem encontrar los usuarios"});
        
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
        const id = req.param.id
        const userExist= await User.findOne({_id: id});
        if (!userExist) {
            return res.status(404).json ({message:"Usuario no encontrado"});
        }
        const updateUser = User.findByIdAndUpdate({_id:id}, req.body, {
            new:true});
            res.status(201).json(updateUser);
        
    } catch (error) {
        res.status(500).json
({error: "Error interno en el servidor"})        
    }
}