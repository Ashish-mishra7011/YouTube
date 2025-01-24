import connectDb from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR while running to server");
      throw err;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port: ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!!", err);
  });
