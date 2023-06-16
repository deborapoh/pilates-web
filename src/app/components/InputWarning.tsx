import { Box, Typography, TypographyProps, styled } from '@mui/material'

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: 12,
  marginLeft: 24,
}))

interface Props extends TypographyProps {
  message: string
}

const InputWarning = ({ message, ...props }: Props) => {
  const marginBottom = Number(props.marginBottom) >= 0 ? props.marginBottom : 12
  const height = Number(props.height) >= 0 ? props.height : 40

  return (
    message ?
      <Text role="alert" sx={{ marginBottom }}>{message}</Text> :
      <Box sx={{ height }} />
  )
}

export default InputWarning
