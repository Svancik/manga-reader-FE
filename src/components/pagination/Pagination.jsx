import { paginationItemClasses } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./pagination.css";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {number === currentPage ? (
              <span className="page-link currentPage">{currentPage}</span>
            ) : (
              <Link className="page-link" onClick={() => paginate(number)}>
                {number}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
