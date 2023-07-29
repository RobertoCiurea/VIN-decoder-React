import express from "express";
import fetch from "node-fetch";
const router = express.Router();
import sha1 from "../controllers/sha1.js";

router.post("/vin", async (req, res) => {
  const apiKey = process.env.API_KEY;
  const secretKey = process.env.SECRET_KEY;

  const { vin } = await req.body;

  try {
    let apiPrefix = "https://api.vindecoder.eu/3.2";
    const id = "decode";

    // Generate the control sum for the API request
    let controlSum = sha1(
      vin + "|" + id + "|" + apiKey + "|" + secretKey
    ).substring(0, 10);

    let url =
      apiPrefix + "/" + apiKey + "/" + controlSum + "/decode/" + vin + ".json";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

export { router as decodeRouter };
