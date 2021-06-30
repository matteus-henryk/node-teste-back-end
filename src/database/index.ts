import { createConnections } from "typeorm";

(async () => {
  createConnections()
    .then(() => {
      console.log("database is running!");
    })
    .catch((err) => {
      console.log(err);
    })
})()
