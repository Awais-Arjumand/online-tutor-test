import React from "react";
import { PaginationProps } from "./types";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];

    pages.push(1);

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (pages[pages.length - 1] !== i - 1) {
        pages.push(-1);
      }
      pages.push(i);
    }

    if (totalPages > 1) {
      if (pages[pages.length - 1] !== totalPages - 1) {
        pages.push(-1);
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex gap-2.5 items-center mt-5" aria-label="Pagination">
              {currentPage < totalPages && (
        <button
          className="text-base cursor-pointer text-stone-900"
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Next page"
        >
       <FaArrowLeftLong />

        </button>)}
      {pageNumbers.map((page, index) =>
        page === -1 ? (
          <span key={`ellipsis-${index}`} className="text-base text-stone-900">
            ...
          </span>
        ) : (
          <button
            key={`page-${page}`}
            className={`px-2.5 py-1.5 text-base cursor-pointer text-stone-900 ${
              currentPage === page ? "font-bold" : ""
            }`}
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        ),
      )}
      {currentPage < totalPages && (
        <button
          className="text-base cursor-pointer text-stone-900"
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <FaArrowRightLong />

        </button>
      )}
    </nav>
  );
};

export default Pagination;
