'use client'

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form"
import { TextField, Button as ButtonMui, styled, CircularProgress } from '@mui/material'

import loginEmptyPhoto from '../../images/login-empty-photo.svg'
import { itemsZIndex } from "@/app/constants";
import { useEffect, useMemo } from "react";
import InputWarning from "@/app/components/InputWarning";
import { useRouter } from "next/navigation";

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 40,
  height: 225,
  width: '100%',
  justifyContent: 'space-between',
}))

const Button = styled(ButtonMui)(({ theme }) => ({
  height: 60, // TODO: not working
  fontWeight: 700,
  fontSize: 18,
  textTransform: 'none',
  color: theme.palette.common.white,
  backgroundColor: `${theme.palette.primary.main} !important`,
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: 30,
}))

const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 30,
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
  height: 60, // TODO: not working

  '.MuiInputBase-root': {
    border: `1.5px solid ${theme.palette.primary.main}`,
    borderRadius: 30,
  },

  '.MuiInputLabel-root': {
    fontWeight: 700,
    fontSize: 18,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    paddingInline: 8,
    borderRadius: 12,
    marginLeft: 12,
  },

  "& fieldset": { border: 'none' },
}))

interface FormFields {
  email: string
  password: string
}

export default function Login() {
  const router = useRouter()

  const defaultValues = useMemo(() => {
    return {
      email: '',
      password: '',
    }
  }, [])

  const {
    formState: { errors, isSubmitted, isSubmitting },
    handleSubmit,
    register,
    clearErrors,
    setError,
    reset
  } = useForm<FormFields>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues,
  })

  useEffect(() => {
    if (isSubmitted) {
      console.log("Submitted")
      reset(defaultValues)
    }
  }, [defaultValues, isSubmitted, reset])

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const { email, password } = data

    if (email !== 'deborapoh@gmail.com' || password !== '123') {
      setError('password', { message: 'Invalid credentials' })
      return
    }

    router.push('/home')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-[35px]">
      <Image
        src={loginEmptyPhoto.src}
        alt="login empty photo"
        height={125}
        width={125}
        style={{
          zIndex: itemsZIndex.loginItems,
          marginTop: 90,
        }}
      />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email: *"
          {...register('email', { required: true })}
          variant="outlined"
        />
        <InputWarning message={errors.email?.type === 'required' ? 'Digite seu email' : ''} />
        <Input
          // InputProps={{ disableUnderline: true }}
          label="Senha: *"
          {...register('password', { required: true })}
          variant="outlined"
        />
        <InputWarning message={errors.password?.type === 'required' ? 'Digite sua senha' : ''} />
        <Button onClick={() => clearErrors()} type="submit" variant="contained">
          {isSubmitting ? <CircularProgress /> : 'Login'}
        </Button>
      </Form>
    </main>
  )
}
