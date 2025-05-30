import pg from 'pg';
import dotenv from "dotenv";
dotenv.config()

export async function conectar() {
  const pool = new pg.Pool({  //Conexão com o banco de dados postgres
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT)
  });
  const conexaoBancoDeDados = await pool.connect();
  console.log("Banco de dados conectado com sucesso!");

  return conexaoBancoDeDados;
}

//export default conectar;