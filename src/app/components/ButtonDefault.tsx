import { Button, ButtonProps, styled, useTheme } from "@mui/material"
import { ReactNode } from "react"

interface ComponentProps extends ButtonProps {
  children: ReactNode
}

const ButtonStyled = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': {
    height: 56,
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.palette.common.white,
  }
}))

const ButtonDefault = ({ children, ...props }: ComponentProps) => {
  return (
    <ButtonStyled variant="contained" {...props}>
      {children}
    </ButtonStyled>
  )
}

export default ButtonDefault
