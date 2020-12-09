import React, { useState } from "react";
import BooksFind from "./BooksFind";
import axios from "axios";
import "./style.css";
import imageBook from "./undraw_book_lover_mkck.png";

function HomeSearch() {
  const [searchTerm, setsearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // API
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
      return { name: "network error", description: "" };
    }
    setLoading(false);
  };

  const onInputChange = (e) => {
    setsearchTerm(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div className="home">
      <h1>BOOKS LIBRARY</h1>
      <p className="infoHome">
        Cerca i tuoi libri preferiti e {<br></br>} scoprine degli altri
      </p>
      <img className="imageBook" src={imageBook} alt="book" />
      <form onSubmit={onSubmitHandler}>
        <input
          type="search"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
        <button>🔎</button>
        {error && (
          <div style={{ color: `red` }}>
            some error occurred, while fetching api
          </div>
        )}
      </form>
      {loading && (
        <div style={{ color: `green` }}>
          fetching books for "<strong>{searchTerm}</strong>"
        </div>
      )}

      <div>
        {books.items.map((book, index) => (
          <BooksFind
            key={index}
            title={book.volumeInfo.title}
            publishedDate={book.volumeInfo.publishedDate}
            bookID={book.id}
            authors={book.volumeInfo.authors}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeSearch;
