import { FC } from "react"
import { InputField, Typography } from "../.."
import { ILabeledInputProps } from "./types"
import { InputContainer } from "./styles.tw"

export const LabeledInput: FC<ILabeledInputProps> = ({ label, background, ...inputProps }) => {
    return (
        <InputContainer
            background={background}
        >
            <Typography variant="label">{label}</Typography>
            <InputField
                {...inputProps}
            />
        </InputContainer>
    )
}