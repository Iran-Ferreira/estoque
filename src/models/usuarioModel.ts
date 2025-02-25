import { conexaoBancoDeDados } from '../database/db_connection.ts';
import bcrypt from "bcryptjs";

class UsuarioModel {
  
  async cadastrar(email, password) {
    const conexao = await conexaoBancoDeDados.conectar();
    const saltRounds = 10 
    const salt = bcrypt.genSaltSync(saltRounds)
    const passwordHash = bcrypt.hashSync(password, salt)

    const comandoSql = "INSERT INTO usuario (email, password) VALUES ($1, $2)";
    return await conexao.query(comandoSql, [email, passwordHash]);
  }

  async listarUser() {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM usuario";
    const listaUser = await conexao.query(comandoSql);
    return listaUser.rows;
  }

  async buscarUserPorId(id_peca) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM usuario WHERE id_peca = ($1)";
    const user = await conexao.query(comandoSql, [id_peca]);
    return user.rows;
  }

  async deletarUsuario(id_usuario) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "DELETE FROM usuario WHERE id_usuario = ($1)";
    const resp = await conexao.query(comandoSql, [id_usuario]);
    return resp;
  }

}

export default new UsuarioModel();