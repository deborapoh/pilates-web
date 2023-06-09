import { Box, Typography, styled } from "@mui/material"

const Container = styled(Box)(() => ({
  width: '100%',
  marginBottom: 32,
  marginTop: 62,
}))

const Hello = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 18,
  fontWeight: 700,
}))

const Welcome = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 14,
}))

const WelcomeUser = () => {
  return (
    <Container>
      <Hello>Olá Ewerton e Mayara</Hello>
      <Welcome>Bem vindo de volta</Welcome>
    </Container>
  )
}

export default WelcomeUser
