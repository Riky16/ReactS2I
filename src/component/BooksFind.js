import React from "react";
import { Link } from "react-router-dom";

const bookAuthors = (authors) => {
  if (!authors) return "";
  if (authors.length <= 2) {
    authors = authors.join(" e ");
  } else if (authors.length > 2) {
    let lastAuthor = " and " + authors.slice(-1);
    authors.pop();
    authors = authors.join(", ");
    authors += lastAuthor;
  }
  return authors;
};

const BooksFind = ({ title, publishedDate, bookID, authors }) => {
  return (
    <div className="bigInfo bookDetail">
      <Link to={`book/${bookID}`}>
        <img
          alt={title}
          src={`http://books.google.com/books/content?id=${bookID}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
      </Link>

      <div className="descBigInfo">
        <Link to={`book/${bookID}`}>
          <h3>{title}</h3>
        </Link>

        <p>{bookAuthors(authors)}</p>
        <p>{publishedDate}</p>
      </div>
    </div>
  );
};

export default BooksFind;
