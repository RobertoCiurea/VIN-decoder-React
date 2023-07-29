import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.get("/image", async (req, res) => {
  const query = await req.query.query;

  let words = query.split(" ");
  //format string based on api query type
  let formattedQuery = words.join("%20");

  const bingKey = process.env.RAPID_API_KEY;
  const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${formattedQuery}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": bingKey,
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.json(result.value[0]);
  } catch (error) {
    console.error(error);
  }
});
export { router as imageRouter };
