import React from "react";
import { MangaProducts } from "../../dummyData";
import "./library.css";
import { Book } from "./../book/Book";

export default function Library() {
  return (
    <div className="libraryWrapper">
      {MangaProducts.map((manga) => (
        <Book manga={manga} />
      ))}
    </div>
  );
}
