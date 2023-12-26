'use client'
import { FC } from "react";
import { ITypography, TTypographyVariant } from "./types";
import { Caption, TextError, MainTitle, Paragraph, Title, TextButton, Label } from "./styles.tw";

const TypographySchema: TTypographyVariant = {
    mainTitle: (props: ITypography) => (
        <MainTitle {...props}>{props.children}</MainTitle>
    ),
    title: (props: ITypography) => (
        <Title {...props}>{props.children}</Title>
    ),
    caption: (props: ITypography) => (
        <Caption {...props}>{props.children}</Caption>
    ),
    paragraph: (props: ITypography) => (
        <Paragraph {...props}>{props.children}</Paragraph>
    ),
    error: (props: ITypography) => (
        <TextError {...props}>{props.children}</TextError>
    ),
    textButton: (props: ITypography) => (
        <TextButton {...props}>{props.children}</TextButton>
    ),
    label: (props: ITypography) => (
        <Label {...props}>{props.children}</Label>
    ),
}
export const Typography: FC<ITypography> = (props: ITypography) => {
    return TypographySchema[props?.variant](props);
};

