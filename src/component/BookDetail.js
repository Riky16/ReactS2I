import React, { useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";
import Back from "./Back";
import "./style.css";

const BooksDetail = ({ match }) => {
  const [book, setBook] = useState({});
  const [error, setError] = useState(false);

  // API
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  useEffect(() => {
    const fetchBook = async () => {
      setError(false);
      try {
        const fetchItem = await axios.get(`${API_URL}?q=${match.params.id}`);
        setBook(fetchItem.data.items[0]);
        console.log(fetchItem.data.items[0]);
      } catch (error) {
        setError(true);
      }
    };

    fetchBook();
  }, []);

  return (
    <div className="bookDetail">
      {error && (
        <div style={{ color: `red` }}>
          Some error occurred, while fetching api
        </div>
      )}
      <div className="bigInfo">
        <img
          alt={_.get(book, "id", "")}
          src={_.get(book, "volumeInfo.imageLinks.thumbnail", "")}
        />
        <div className="descBigInfo">
          <h2>{_.get(book, "volumeInfo.title", "Titolo non disponibile")}</h2>
          <p>{_.get(book, "volumeInfo.subtitle", "")}</p>

          <p>
            {_.get(book, "volumeInfo.authors[0]", "Gli autori non sono noti")}
            {<br></br>}
            {_.get(book, "volumeInfo.authors[1]", "")}
            {<br></br>}
            {_.get(book, "volumeInfo.authors[2]", "")}
          </p>

          <p>
            Categoria/e:{" "}
            {_.get(
              book,
              "volumeInfo.categories[0]",
              "Non è stato categorizzato"
            )}{" "}
            {_.get(book, "volumeInfo.categories[1]", "")} {<br></br>}
            {_.get(book, "volumeInfo.categories[2]", "")}
          </p>
        </div>
      </div>
      <p>
        <b>Informazioni aggiuntive → </b>
        {_.get(book, "searchInfo.textSnippet", "Non ci sono informazioni")}
      </p>
      <p>
        Lingua:{" "}
        {_.get(
          book,
          "volumeInfo.language",
          "Non conosciamo la lingua in cui è stato scritto"
        )}
      </p>{" "}
      <p>
        {" "}
        Pagine: {_.get(book, "volumeInfo.pageCount", "Dato non disponibile")}
      </p>
      <p>
        Pubblicazione:{" "}
        {_.get(
          book,
          "volumeInfo.publishedDate",
          "Non ci sono informazioni sulla pubblicazione"
        )}
      </p>
      <p>
        Prezzo: {_.get(book, "saleInfo.listPrice.amount", "Non disponibile")}{" "}
        {_.get(book, "saleInfo.listPrice.currencyCode", "")}
      </p>
      <Back />
    </div>
  );
};

export default BooksDetail;
