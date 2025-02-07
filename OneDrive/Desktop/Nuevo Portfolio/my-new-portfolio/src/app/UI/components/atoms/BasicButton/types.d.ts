import { TBorder, TColors, TDimension, TFontSize, TSpace } from '@/app/UI/types/propertyTypes';
import { IconProp,IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

export interface IContainerBasicButtonProps {
    width?: TDimension;
    height?: TDimension;
    background?: TColors;
    size?: 'xs' | 'small' | 'normal' | 'large' | 'xl' | 'fullWidth' | 'auto';
    padding?: TSpace;
    hover?: String;
    focus?: String;
    active?: String;
    border?: TBorder;
    disabled?: boolean;
    type?: 'submit' | 'button';
    children: ReactNode;
    poligonShape?: string;
    onClick?:  (event: React.MouseEvent<HTMLButtonElement>) => void;
    effects?:String;
    
};
export interface IIconButtonProps{ 
    icon?:IconDefinition;
    color?: TColors;
    iconSize?:TFontSize;
}
export interface IBasicButtonProps extends IContainerBasicButtonProps {    
    style?: CSSProperties;
    color?: TColors;
    iconLeft?:IconDefinition;
    iconRight?: IconDefinition;
    loading?: boolean;
    title?: string;
    variant?: 'text' | 'contained' | 'outlined';
    children?: ReactNode;
};

export enum ButtonSize {
    xs = 'size-4',
    small = 'size-8',
    normal = 'size-16',
    large = 'size-32',
    xl = 'size-64',
    fullWidth = 'full',
    auto = 'auto'
}
