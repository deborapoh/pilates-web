'use client'

import DatePicker from "@/app/components/DatePicker"
import InputText from "@/app/components/InputText"
import InputWarning from "@/app/components/InputWarning"
import { FormData, FormValues, NameValues, studentFormValues } from "@/app/constants/student"
import BackButton from "@/app/icons/BackButton"
import { Box, Button, CircularProgress, Typography, styled } from "@mui/material"
import { useMemo } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 40,
  // height: 225,
  width: '100%',
  justifyContent: 'space-between',
}))

const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 700,
  marginLeft: 16,
  color: theme.palette.primary.main,
}))

export default function StudentRegistration() {
  const defaultValues = useMemo(() => {
    let obj = {}

    studentFormValues.forEach((v: FormValues) => obj = { ...obj, [v.name]: '' })

    return obj
  }, [])

  const {
    formState: { errors, isSubmitted, isSubmitting },
    handleSubmit,
    register,
    clearErrors,
    setError,
    reset
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues,
  })

  const onSubmit:SubmitHandler<FormData> = async (data) => {}

  return (
    <main className="flex min-h-screen flex-col">
      <TitleContainer>
        <BackButton path="/students" />
        <Title>Cadastro de Alunos</Title>
      </TitleContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {studentFormValues.map((v: FormValues) => {
          if (v.name === 'dateOfBirth') {
            return (
              // <Box
              //   key={v.name}
              //   sx={{
              //     width: '100%',
              //     height: 60,
              //     backgroundColor: 'white',
              //     borderRadius: 1,
              //     marginBottom: 2.25,
              //   }}
              // >
                <DatePicker key={v.name} />
              // </Box>
            )
          }
          return (
            <Box key={v.name} width="100%">
              <InputText
                label={`${v.label} ${v.required ? '*' : ''}`}
                {...register(v.name, { required: v.required })}
                variant="outlined"
              />
              <InputWarning
                marginBottom={0}
                height={18}
                message={errors[v.name]?.type === 'required' && v.missingInfoError ?
                  v.missingInfoError :
                  ''}
              />
            </Box>
          )
        })}

        <Button onClick={() => clearErrors()} type="submit" variant="contained">
          {isSubmitting ? <CircularProgress /> : 'Salvar'}
        </Button>
        {/* <Input
          // InputProps={{ disableUnderline: true }}
          label="Senha: *"
          {...register('password', { required: true })}
          variant="outlined"
        /> */}
        {/* <InputWarning message={errors.password?.type === 'required' ? 'Digite sua senha' : ''} /> */}
      </Form>
    </main>
  )
}
