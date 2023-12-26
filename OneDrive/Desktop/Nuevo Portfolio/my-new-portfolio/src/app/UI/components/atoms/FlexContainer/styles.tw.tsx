import { FC } from "react";
import { IFlexProps } from "./types";

export const Flex: FC<IFlexProps> = ({
    children,
    direction,
    justify,
    align,
    background,
    border,
    borderColor,
    padding,
    gap,
    margin,
    onClick,
    height,
    overflow,
    width,
    cursor,
    position,
    style,
}) => {
    return (
        <div
            className={`
                flex ${position ? position : 'relative'} ${direction ? direction : 'flex-row'} ${justify ? justify : 'justify-start'} ${align ? align : 'items-start'}
                w-${width ? width : 'full'} h-${height ? height : 'full'} ${cursor? cursor : 'cursor-auto'} ${border? border : 'border-none'} 
                g-${gap ? gap : '0'} p-${padding ? padding : '0'} m-${margin ? margin : '0'} ${overflow ? overflow : 'overflow-auto'}
                bg-${background? background : 'transparent'} border-${(border && border !== 'border-none') && borderColor}
            `}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    )
}