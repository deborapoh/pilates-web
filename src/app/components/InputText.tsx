import { TextField, TextFieldProps, styled } from "@mui/material"
import { ForwardRefRenderFunction, FunctionComponent, forwardRef } from "react"

const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 4,
  width: '100%',

  '.MuiInputLabel-root': {
    fontSize: 14,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    paddingInline: 8,
    borderRadius: 12,
  },

  "& fieldset": { border: 'none' },
}))

const InputText: ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
> = ({ ...props }, ref) => {
  return <Input {...props} ref={ref} />;
};

export default forwardRef(InputText)
