import { styled } from "@mui/material";
import { ReactNode } from "react";

export const FormStyled = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 40,
  height: 225,
  width: '100%',
  justifyContent: 'space-between',
}))

const Form = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <FormStyled {...props}>
      {children}
    </FormStyled>
  )
}

export default Form
