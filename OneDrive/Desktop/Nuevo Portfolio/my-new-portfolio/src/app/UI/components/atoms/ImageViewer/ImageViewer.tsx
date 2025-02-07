import { FC } from "react"
import { ImageView } from "./styles.tw"
import { IBasicImageProps, IImageViewerProps, TImageVariant } from "./types"


const ImageViewerSchema: TImageVariant = {
    ImageView: (props: IBasicImageProps) => (
        <ImageView {...props} />
    ),
    Background: (props: IBasicImageProps) => (
        <ImageView {...props} />
    ),
    BackBlur: (props: IBasicImageProps) => (
        <ImageView {...props} />
    ),
    ImagePreview: (props: IBasicImageProps) => (
        <ImageView {...props} />
    ),
}

export const ImageViewer: FC<IImageViewerProps> = ({ type, ...otherProps }) => {
    return ImageViewerSchema[type](otherProps)
};