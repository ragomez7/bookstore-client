import { useState } from "react";


const usePaginateTable = () => {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const handleChangePage = async (e) => {
        const action = e.target?.getAttribute('data-testid');
        const isNextPageAction = action === "KeyboardArrowRightIcon";
        const newPage = isNextPageAction ? currentPage + 1 : currentPage - 1;
        const newOffset = isNextPageAction ? offset + 10 : offset - 10;
        setCurrentPage(newPage)
        setOffset(newOffset)
    };
    return [offset, currentPage, handleChangePage]
}

export default usePaginateTable;

