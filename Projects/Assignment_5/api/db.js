import mysql from "mysql2/promise";
import { dbConfigs, sqlTable } from "./configs.js";

export const getNewsFromDB = async () => {
  const query = `SELECT * FROM ${sqlTable}`;
  const connection = await mysql.createConnection(dbConfigs);
  const [data, _] = await connection.execute(query);
  await connection.end();
  return data;
};

export const addNewsToDB = async (text) => {
  const query = `INSERT INTO ${sqlTable} (text) VALUES ('${text}')`;
  const connection = await mysql.createConnection(dbConfigs);
  await connection.execute(query);
  await connection.end();
};