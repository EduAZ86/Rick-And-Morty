import { FC, ReactNode } from "react";

export type TItemPagination = string | FC | ReactNode | HTMLElement

export interface IusePaginationProps{
    arrayItems:TItemPagination[];
    lenght:number;
}