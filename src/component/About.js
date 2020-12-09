import React from "react";
import Back from "./Back";

function About() {
  return (
    <div className="about">
      <h1>ABOUT</h1>
      <p>
        Questo progetto è stato realizzato per la Super Guida React di
        <a href="https://www.start2impact.it/" target="_blank">
          {" "}
          start2impact
        </a>
        .{" "}
      </p>
      <p>
        {" "}
        Per la realizzazione sono state utilizzate le API di
        <a
          href="https://developers.google.com/books/docs/overview"
          target="_blank"
        >
          {" "}
          Google Books
        </a>
        .{" "}
      </p>
      <div className="paragraphP">
        Il progetto consiste nel creare un sito web che permetta la ricerca di
        una vasta collezione di libri; il sito deve includere:
        <ul>
          <li>
            Barra di ricerca che permetta di cercare tutti i libri disponibili
            dell’API
          </li>
          <li>
            Ogni libro cercato dovrà mostrare almeno titolo, autore e immagine
            di copertina.
          </li>
          <li>
            Cliccare su un libro porterà ad una pagina dedicata, dove verranno
            mostrate ulteriori informazioni.
          </li>
          <li>UI e UX semplice e facile da usare.</li>
          <li>Struttura dell’app organizzata e comprensibile.</li>
          <li>Design responsive.</li>
        </ul>
      </div>
      <Back />
    </div>
  );
}

export default About;
