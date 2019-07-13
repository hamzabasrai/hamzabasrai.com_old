import * as functions from "firebase-functions";
import axios from "axios";
import convert = require("xml-js");

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  //set JSON content type and CORS headers for the response
  response.header("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");

  //respond to CORS preflight requests
  if (request.method == "OPTIONS") {
    response.status(204).send("");
  }

  axios
    .get(
      "https://www.goodreads.com/review/list?v=2&key=7noSJ72wi0lDE0L9tPpCwA&id=87355765&shelf=currently-reading"
    )
    .then(val => {
      // console.log(val);
      const data = JSON.parse(convert.xml2json(val.data, { compact: true, spaces: 4 }));
      let imageUrl: string = data.GoodreadsResponse.reviews.review.book.image_url._text;
      imageUrl = imageUrl.slice(0, -11) + '.jpg'
      
      const book = {
        title: data.GoodreadsResponse.reviews.review.book.title._text,
        image: imageUrl
      };

      response.status(200).send(book);
    })
    .catch(err => {
      console.log(err);
      response.status(500).send("Error");
    });
});
