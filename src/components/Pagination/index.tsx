import React from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.scss";
type PaginationProps = {
  total: number;
  currentPage: number;
  onChangePage: (id: number) => void;
};
const Pagination = ({ total, currentPage, onChangePage }: PaginationProps) => {
  const handlePageClick = (e: { selected: number }) => {
    console.log(e.selected);
    onChangePage(e.selected + 1);
  };

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={total}
      previousLabel="<"
      forcePage={currentPage - 1}
      // @ts-ignore
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
