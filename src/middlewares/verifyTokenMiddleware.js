import { verifyToken } from "../utils/verifyToken.js"

//verificacion del token
export const verifyTokenMiddeleware = (req, res, next) => {
     const token = req.headers.authorization
     if(!token){
        return res.status(401).json({message: "token de acceso no proporcionado"})
     }
//decriptacion
     try {
        const decoded = verifyToken(token);
        req.res = decoded;
        console.log("req.user", req.user)
        next()
    
     } catch (error) {
        return res.status(401).json({message:"token de acceso invalido"})
     }
}