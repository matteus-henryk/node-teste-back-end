import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.send("Desafio Back-end");
});

app.listen(process.env.PORT || 3030, () => {
  console.log("Server is running!");
});
