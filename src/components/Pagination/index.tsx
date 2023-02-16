import React from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.scss";
const Pagination = () => {
  const handlePageClick = (e: { selected: number }) => {
    console.log(e.selected);
  };

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={100}
      previousLabel="<"
      // @ts-ignore
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
