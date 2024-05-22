import jwt from "jsonwebtoken";
//funcion para verificar toquen con decoded
export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, "secreto");
    return decoded;
  } catch (error) {
    throw new Error("Token invalido");
  }
}