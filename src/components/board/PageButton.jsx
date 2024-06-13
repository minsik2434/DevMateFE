import React from "react";
import { useState } from "react";

function PageButton({ pageData, setPage }) {
  const [pageRange, setPageRange] = useState(0);

  const handlePrevRange = () => {
    setPageRange((prev) => (prev > 0 ? prev - 1 : prev));
    setPage((pageRange - 1) * 10 + 9);
  };

  const handleNextRange = () => {
    const maxRange = Math.floor((pageData.totalPage - 1) / 10);
    setPageRange((prev) => (prev < maxRange ? prev + 1 : prev));
    setPage((pageRange + 1) * 10);
  };

  const handleNextPage = () => {
    const nextPage = pageData.page + 1;
    const maxRange = Math.floor((pageData.totalPage - 1) / 10);
    const nextRange = Math.floor(nextPage / 10);

    if (nextRange > pageRange && nextRange <= maxRange) {
      setPageRange(nextRange);
    }

    setPage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = pageData.page - 1;
    const prevRange = Math.floor(prevPage / 10);

    if (prevRange < pageRange) {
      setPageRange(prevRange);
    }

    setPage(prevPage);
  };

  const pagesToShow = 10;
  const startPage = pageRange * pagesToShow;
  const endPage = Math.min(startPage + pagesToShow, pageData.totalPage);

  return (
    <div className="mobile:hidden tablet:block">
      <ol className="flex justify-center gap-5 text-sm mt-24 mb-64">
        <li className="flex justify-center items-center border ">
          <button
            onClick={handlePrevPage}
            className="px-2 py-0.5"
            disabled={pageData.page === 0}
          >
            이전페이지
          </button>
        </li>
        {startPage > 0 && (
          <li className="flex justify-center items-center border">
            <button className="px-2 py-0.5" onClick={handlePrevRange}>
              ...
            </button>
          </li>
        )}
        {Array.from(
          { length: endPage - startPage },
          (_, index) => startPage + index
        ).map((index) => (
          <li
            key={index}
            className={`flex justify-center items-center border ${
              pageData.page === index ? "bg-gray_2" : ""
            }`}
          >
            <button
              type="button"
              value={index}
              onClick={() => setPage(index)}
              className="px-2 py-0.5"
            >
              {index + 1}
            </button>
          </li>
        ))}
        {endPage < pageData.totalPage && (
          <li className="flex justify-center items-center border">
            <button className="px-2 py-0.5" onClick={handleNextRange}>
              ...
            </button>
          </li>
        )}
        <li className="flex justify-center items-center border">
          <button
            className="px-2 py-0.5"
            onClick={handleNextPage}
            disabled={pageData.page === pageData.totalPage - 1}
          >
            다음페이지
          </button>
        </li>
      </ol>
    </div>
  );
}

export default PageButton;
