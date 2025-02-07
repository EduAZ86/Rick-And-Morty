import { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { TBorder, TColors, TAlign, TCursor, TDimension, TDirection, TJustify, TSpace, TOverflow, TGap, TPosition } from '@/app/UI/types/propertyTypes';

export interface IFlexContainerProps extends PropsWithChildren {
    justify?: TJustify;
    align?: TAlign;
    border?: Tborder;
    borderColor?: TColors;
    background?: TColors;
    padding?: TSpace;
    margin?: TSpace;
    onClick?: () => void;
    height?: TDimension;
    overflow?: TOverflow;
    width?: TDimension;
    cursor?: TCursor;
    gap?: TGap;
    position?: TPosition;
    direction?: TDirection;
    style?: CSSProperties;
}

export interface IFlexProps extends IFlexContainerProps {
    children: ReactNode;
}