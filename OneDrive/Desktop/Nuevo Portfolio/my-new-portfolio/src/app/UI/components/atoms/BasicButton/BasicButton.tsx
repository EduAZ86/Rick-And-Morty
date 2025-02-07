import { FC } from "react";
import { Typography } from "..";
import { IBasicButtonProps } from "./types";
import { ButtonContainer, IconButton } from "./styles.tw";

export const BasicButton: FC<IBasicButtonProps> = ({
    iconLeft,
    iconRight,
    color,
    title
}, otherProps) => {
    return (
        <ButtonContainer
            {...otherProps}
        >
            {iconLeft &&
                <IconButton
                    key={'left'}
                    icon={iconLeft}
                    color={color}
                />
            }
            {title &&
                <Typography variant="textButton"
                    align="center"
                    key={'title'}
                >{title}</Typography>

            }
            {iconRight &&
                <IconButton
                    key={'right'}
                    icon={iconRight}
                    color={color}
                />
            }
        </ButtonContainer>
    )
};