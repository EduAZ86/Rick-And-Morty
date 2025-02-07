'use client'
import { CSSProperties, FC, PropsWithChildren } from 'react';

export interface ITypographyProps extends PropsWithChildren {
    variant: keyof TTypographyVariant;
    style?: CSSProperties;
    bold?: boolean;
    align?: 'center' | 'left' | 'right';
};

export type TTypographyVariant = {
    mainTitle: FC<ITypographyProps>;
    title: FC<ITypographyProps>;
    caption: FC<ITypographyProps>;
    paragraph: FC<ITypographyProps>;
    error: FC<ITypographyProps>;
    textButton: FC<ITypographyProps>;
    label: FC<ITypographyProps>;
};