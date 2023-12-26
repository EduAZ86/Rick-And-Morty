import { CSSProperties, PropsWithChildren, ReactNode } from 'react';

type dimension = 'auto' | 'screen' | 'full' | 'min-content' | 'max-content' | 'fit-content' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/6' | '5/6';
type gap = '0' | '1' | '2' | '4' | '6' | 'x-0' | 'x-1' | 'x-2' | 'x-4' | 'y-6' | 'y-0' | 'y-1' | 'y-2' | 'y-4' | 'y-6'
type space = gap | 'l-0' | 'l-1' | 'l-2' | 'l-4' | 'l-6' | 'r-0' | 'r-1' | 'r-2' | 'r-4' | 'r-6' | 't-0' | 't-1' | 't-2' | 't-4' | 't-6' | 'b-0' | 'b-1' | 'b-2' | 'b-4' | 'b-6';
type justify = 'justify-center' | 'justify-start' | 'justify-end' | 'justify-between' | 'justify-around' | 'justify-evenly';
type align = 'items-center' | 'items-start' | 'items-end' | 'items-baseline' | 'items-stretch';
type overflow = 'overflow-auto' | 'overflow-hidden' | 'overflow-clip' | 'overflow-visible' | 'overflow-scroll' | 'overflow-x-auto' | 'overflow-y-auto' | 'overflow-x-hidden' | 'overflow-x' | 'overflow-y-hidden';
type colors = 'transparent' | 'background' | 'primary' | 'secundary' | 'shadow' | 'text' | 'secundary-text' | 'error';
export interface IFlexContainerProps extends PropsWithChildren {
    justify?: justify;
    align?: align;
    border?: 'border-solid' | 'border-none';
    borderColor? : colors;
    background?: colors;
    padding?: space;
    margin?: space;
    onClick?: () => void;
    height?: dimension;
    overflow?: overflow;
    width?: dimension;
    cursor?: 'cursor-auto' | 'cursor-pointer' | 'cursor-wait' | 'cursor-text' | 'cursor-move';
    gap?: gap;
    position?: 'absolute' | 'relative' | 'fixed';
    direction?: 'flex-row' | 'flex-col' | 'flex-row-reverse';
    style?: CSSProperties;
}

export interface IFlexProps extends IFlexContainerProps {
    children: ReactNode;
}