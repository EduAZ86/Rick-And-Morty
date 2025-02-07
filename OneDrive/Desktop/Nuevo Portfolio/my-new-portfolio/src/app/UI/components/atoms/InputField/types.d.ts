import { TColors, TCursor, TDimension } from "@/app/UI/types/propertyTypes";
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IStyleContainerInputProps {
    width?: TDimension;
    color?: TColors;
    background?: TColors;
    style?: CSSProperties;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    register?: UseFormRegisterReturn;
    error?: FieldError;
    cursor?: TCursor;
    onBlur?: FocusEventHandler<T> | undefined;
}

export interface IInputFieldTextProps extends IStyleContainerInputProps {
    type: 'number' | 'text' | 'email' | 'password'
    name: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    max?: number | string;
    min?: number | string;
}

export interface IInputTextAreaProps extends IStyleContainerInputProps {
    placeholder: string;
    name: string;
    id: string;
    cols: number;
    rows: number;
    value: string;
}

export interface IInputFieldProps extends IInputTextAreaProps, IInputFieldTextProps {
    type: 'number' | 'text' | 'textArea' | 'email' | 'password'
}