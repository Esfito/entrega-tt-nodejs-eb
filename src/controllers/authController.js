import jwt from "jsonwebtoken";
import { authData } from "../data/authData.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  const data = authData()

  if (email == data.email && password == data.password) {
    const token = jwt.sign({ email }, process.env.SECRET, {
      expiresIn: "1h",
    });

    return res.json({ 
        note: "Utilice este token para añadir o eliminar productos",
        token 
    });
  }

  res.status(401).json({ error: "Credenciales invalidas" });
};