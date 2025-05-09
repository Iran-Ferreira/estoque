import jwt from 'jsonwebtoken';
import authModel from '../models/authModel.ts';

class AuthController {
  async logar(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ login: false, message: "Email e senha são obrigatórios" });
    }
    console.log("Esse é o email: ", email)
    console.log("Essa é a senha: ", password)
    
    try {
      const resultadoLogin = await authModel.logar(email, password);
      console.log(resultadoLogin)

      if (resultadoLogin  === undefined || resultadoLogin === null) {
        return res.status(404).send({ login: false, message: "Email ou senha incorreto." });
      }

      console.log("Esse é o resultado do login ", resultadoLogin)

      const { id_usuario, email: usuarioEmail, password: usuarioPassword } = resultadoLogin;

      const token = jwt.sign(
        {
          id_usuario,
          email: usuarioEmail,
          password: usuarioPassword,
          isAdmin: (usuarioEmail === "admin@gmail.com")
        },
        `${process.env.SECRET}`,
        {
          expiresIn: "1h",
        }
      );

      console.log("Esse é o token: ", token)
      return res.status(200).send({ login: true, token });
    } catch (error) {
      console.error("Erro ao logar:", error);
      return res.status(500).send({ login: false, message: "Erro interno ao tentar logar" });
    }
  }
}

export default new AuthController();