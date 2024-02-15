"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import ReactPaginate from "react-paginate";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 191, 200, 2000,
  30, 31, 33, 34, 33, 33, 33, 333, 33, 33, 33, 33, 33, 33, 33,
];

const Pagination = () => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  let itemsPerPage: number = 4;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="px-5 md:px-24 mt-10 block">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaChevronRight className="w-4 h-5 text-slate-700" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={<FaChevronLeft className="w-4 h-5 text-slate-700" />}
        renderOnZeroPageCount={null}
        activeClassName="px-4 py-1 text-center rounded-full bg-slate-300"
        pageClassName="py-2 text-lg text-lg"
        previousClassName="py-3"
        nextClassName="py-3"
        className="w-full flex gap-5 text-lg py-5 px-3 rounded-2xl"
      />
    </div>
  );
};

export default Pagination;
