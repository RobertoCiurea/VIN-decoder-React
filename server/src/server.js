import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { decodeRouter } from "./routes/decode.js";
import { imageRouter } from "./routes/getImage.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", decodeRouter);
app.use("/api", imageRouter);

app.listen(3000, () => {
  console.log("Server has started");
});
