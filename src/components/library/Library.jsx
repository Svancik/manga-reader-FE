import React from "react";

import "./library.css";
import { Book } from "./../book/Book";

export default function Library({ mangaLibrary }) {
  return (
    <div className="libraryWrapper">
      <ul className="mangaList">
        {mangaLibrary.map((manga) => (
          <li key={manga.id} className="mangaListBook">
            <Book manga={manga} />
          </li>
        ))}
      </ul>
    </div>
  );
}
