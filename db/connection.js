import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    uri: process.env.MYSQL_PUBLIC_URL,
    timezone: "+02:00" 
});
   

export default pool.promise();