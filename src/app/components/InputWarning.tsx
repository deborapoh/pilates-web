import { Box, Typography, styled } from '@mui/material'

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 12,
  marginBottom: 12,
  marginLeft: 24,
}))

const EmptyMessage = styled(Box)(() => ({
  height: 40,
}))

const InputWarning = ({ message }: { message: string }) => (
  message ? <Text role="alert">{message}</Text> : <EmptyMessage />
)

export default InputWarning
