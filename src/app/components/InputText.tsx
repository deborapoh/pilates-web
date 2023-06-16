import { TextField, TextFieldProps, styled } from "@mui/material"
import { FunctionComponent } from "react"

const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 4,
  width: '100%',

  '.MuiInputLabel-root': {
    fontSize: 18,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    paddingInline: 8,
    borderRadius: 12,
  },

  "& fieldset": { border: 'none' },
}))

const InputText: FunctionComponent<TextFieldProps> = ({ ...props }) => {
  return (
    <Input {...props} />
  )
}

export default InputText
