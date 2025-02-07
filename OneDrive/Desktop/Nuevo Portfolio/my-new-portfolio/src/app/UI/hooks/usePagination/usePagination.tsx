import { useEffect, useState } from "react";
import { IusePaginationProps, TItemPagination } from "./types";

export const usePagination = ({ arrayItems, lenght }: IusePaginationProps) => {
    const [currentOffset, setCurrentOffset] = useState<number>(0);
    const [currentSelect, setCurrentSelect] = useState<TItemPagination[] | null>(null);
    useEffect(() => {
        setCurrentSelect(arrayItems.slice(currentOffset, lenght));
        return () => {
            setCurrentOffset(0)
            setCurrentSelect(null)
        }
    }, [currentOffset])

    const nextPage = () => {
        setCurrentOffset(currentOffset + 1);
    };
    const prevPage = () => {
        if (currentOffset > 0) {
            setCurrentOffset(currentOffset - 1);
        }
    };
    return { currentSelect, nextPage, prevPage }
}