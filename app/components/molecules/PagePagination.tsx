"use client";
import { Pagination } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setPage } from "../../redux/slices/productsSlice";
import { useEffect, useState } from "react";

export default function PagePagination() {
  const dispatch = useAppDispatch();
  const { page, products } = useAppSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage, dispatch]);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto my-12 justify-end">
      <Pagination
        currentPage={currentPage}
        totalPages={products.length}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
