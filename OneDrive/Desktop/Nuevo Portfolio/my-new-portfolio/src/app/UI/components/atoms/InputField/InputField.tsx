import { FC } from "react"
import { IInputFieldProps } from "./types"
import { InputTextArea, InputTextField } from "./styles.tw"

export const InputField: FC<IInputFieldProps> = ({
    type,
    name,
    onChange,
    placeholder,
    background,
    color,
    cursor,
    disabled,
    error,
    max,
    min,
    onBlur,
    readOnly,
    required,
    style,
    width,
    cols,
    id,
    rows,
    value
}) => {
    return (
        <>
            {type === 'textArea'
                ?
                <InputTextArea
                    cols={cols}
                    rows={rows}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    width={width}
                    color={color}
                    background={background}
                    style={style}
                    required={required}
                    disabled={disabled}
                    readOnly={readOnly}
                    error={error}
                    cursor={cursor}
                    onBlur={onBlur}
                />
                :
                <InputTextField
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    width={width}
                    color={color}
                    background={background}
                    style={style}
                    required={required}
                    disabled={disabled}
                    readOnly={readOnly}
                    error={error}
                    cursor={cursor}
                    onBlur={onBlur}
                    type={type}
                    max={type === 'number' ? max : undefined}
                    min={type === 'number' ? min : undefined}
                    maxLength={type === 'number' ? 10 : 30}
                />
            }

        </>
    )
}