import { FC } from "react";
import { Flex } from "./styles.tw";
import { IFlexProps } from "./types";

export const FlexContainer: FC<IFlexProps> = ({ children, ...otherProps }) => {
    return (
        <Flex {...otherProps}
        >{children}</Flex>
    )
}