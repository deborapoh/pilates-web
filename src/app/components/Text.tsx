import { TextField, TextFieldProps, Typography, styled } from "@mui/material"
import { ForwardRefRenderFunction, FunctionComponent, ReactNode, forwardRef } from "react"

const TextStyled = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 4,
  color: theme.palette.primary.main,
  width: '100%',

  // '.MuiInputLabel-root': {
  //   fontSize: 18,
  //   backgroundColor: theme.palette.common.white,
  //   paddingInline: 8,
  //   borderRadius: 12,
  // },

  // "& fieldset": { border: 'none' },
}))

const Text = ({ children }: { children: ReactNode }) => {
  return <TextStyled>{children}</TextStyled>
};

export default Text
