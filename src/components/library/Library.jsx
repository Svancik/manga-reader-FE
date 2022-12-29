import React from "react";

import "./library.css";
import { Book } from "./../book/Book";

export default function Library({ mangaLibrary }) {
  return (
    <div className="libraryWrapper">
      {mangaLibrary.map((manga) => (
        <Book manga={manga} />
      ))}
    </div>
  );
}
