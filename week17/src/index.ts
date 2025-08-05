// import { Client } from "pg";

// const pgClient = new Client({
//   user: "neondb_owner",
//   password: "npg_AD1FuasT2ReC",
//   port: 5432,
//   host: "ep-crimson-glitter-adpkr9qk-pooler.c-2.us-east-1.aws.neon.tech",
//   database: "neondb",
//   ssl: true,
// });

// async function main() {
//   await pgClient.connect();
//   const response = await pgClient.query("SELECT * FROM users");
//   console.log(response.rows);
// }
// main();

import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client({
  user: "neondb_owner",
  password: "npg_AD1FuasT2ReC",
  port: 5432,
  host: "ep-crimson-glitter-adpkr9qk-pooler.c-2.us-east-1.aws.neon.tech",
  database: "neondb",
  ssl: true,
});

pgClient.connect();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;

  try {
    const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1, $2, $3) RETURNING id;`;

    const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;

    await pgClient.query("BEGIN;");

    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);

    const userId = response.rows[0].id;

    const addressInsertQueryResponse = await pgClient.query(
      addressInsertQuery,
      [city, country, street, pincode, userId]
    );

    await pgClient.query("COMMIT;");

    res.json({
      message: "You have signed up",
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "Error while sigining up",
    });
  }
});

app.listen(3000);
