const express = require("express");
//

const redis = require("redis");
const { Client } = require("pg");
const app = express();

// Connect to Redis
const REDIS_HOST = "redis";
const REDIS_PORT = 6379;
const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});
redisClient.on("connect", () => {
  console.log("Connected to Redis");
});
redisClient.on("error", (err) => {
  console.error("Redis error", err);
});
redisClient.connect();

// Connect to postgres
const DB_USER = "postgres";
const DB_PASSWORD = "example";
const DB_HOST = "postgres";
const DB_PORT = 5432;
const URI = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

const client = new Client({
  connectionString: URI,
});

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL", err);
  });

// // Connect to MongoDB
// const DB_USER = 'root';
// const DB_PASSWORD = 'example';
// const DB_HOST = 'mongo';
// const DB_PORT = 27017;
// mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Error connecting to MongoDB', err);
// });

// docker when run create default network contain the container who exists and every services have a ip and name

PORT = 6000;
app.get("/", (req, res) => {
  redisClient.set("products", "products ....");
  res.send(
    "<h1>Hello wosrlffffd ttttt ayyyy ffff from aws, using docker hub</h1>"
  );
});
app.get("/data", async (req, res) => {
  const products = await redisClient.get("products");
  res.send(
    `<h1>Hello wosrlffffd ttttt ayyyy ffff</h1>    <h2>Products: ${products}</h2>`
  );
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`server running at port ${PORT}`);
});
