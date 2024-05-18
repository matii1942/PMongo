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
        res.status(500).json ({error: "Can't show the users"});
        
    }
};

export const get = async (req, res) => {
    try {
        const users = await User.find();
        if (users.lenght === 0){
            return res.status(404).json({message : "there are not users"});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:  "Internal server error"})
    }
}