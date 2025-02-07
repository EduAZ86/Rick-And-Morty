import { ITypographyProps } from "../../atoms/Typography/types";

export interface IUseTypingProps {
    textToType: string;
    typingDelay: number;
}

export interface ITypingTextProps extends ITypographyProps, IUseTypingProps{}