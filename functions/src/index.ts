import * as functions from "firebase-functions";
import axios from "axios";
import convert = require("xml-js");

//Need to allow CORS
const ResponseHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

interface Book {
  title: String;
  author: String;
  imageURL: String;
}

const extractBook = (data: any): Book => {
  return {
    title: data.book.title_without_series._text,
    author: data.book.authors.author.name._text,
    imageURL: data.book.image_url._text.slice(0, -11) + ".jpg"
  };
};

export const getBooks = functions.https.onRequest(async (request, response) => {
  //respond to CORS preflight requests
  if (request.method == "OPTIONS") {
    response.status(204).send("");
  }
  response.set(ResponseHeaders);

  try {
    const currentResp = await axios.get(
      "https://www.goodreads.com/review/list?v=2&key=7noSJ72wi0lDE0L9tPpCwA&id=87355765&shelf=currently-reading"
    );
    const readResp = await axios.get(
      "https://www.goodreads.com/review/list?v=2&key=7noSJ72wi0lDE0L9tPpCwA&id=87355765&shelf=read"
    );

    axios
      .all([currentResp, readResp])
      .then(
        axios.spread(function(current, read) {
          // GoodReads API sends XML, convert to JSON
          const raw_current = JSON.parse(
            convert.xml2json(current.data, { compact: true, spaces: 4 })
          );
          const raw_read = JSON.parse(
            convert.xml2json(read.data, { compact: true, spaces: 4 })
          );

          const payload = {
            CurrentBook: extractBook(
              raw_current.GoodreadsResponse.reviews.review
            ),
            Read: raw_read.GoodreadsResponse.reviews.review
              .map((book: any) => extractBook(book))
              .slice(0, 3)
          };

          response.status(200).send(payload);
        })
      )
      .catch(err => {
        throw err;
      });

  } catch (error) {
    console.log(error);
    response.status(500).send("Error");
  }
});
