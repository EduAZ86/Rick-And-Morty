import { FC } from "react";
import { FlexContainer, ImageViewer } from "../..";
import { IImagesPreviewerProps } from "./types";

export const ImagesPreviewer: FC<IImagesPreviewerProps> = ({ arrayImages }) => {
    return (
        <FlexContainer
            gap="1"
            direction="flex-row"
            width='fit-content'
        >
            {arrayImages.map((image: string, index: number) => {
                return (
                    <ImageViewer
                        key={index}
                        src={image}
                        alt={`image-${index}`}
                        type="ImagePreview"
                    />
                )
            })}
        </FlexContainer>
    )
}