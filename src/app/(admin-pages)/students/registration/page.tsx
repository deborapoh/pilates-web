'use client'

import DatePicker from "@/app/components/DatePicker"
import InputText from "@/app/components/InputText"
import InputWarning from "@/app/components/InputWarning"
import { FormData, FormValues, studentFormValues } from "@/app/constants/student"
import BackButton from "@/app/icons/BackButton"
import { Box, CircularProgress, Grid, SelectChangeEvent, TextField, Typography, styled } from "@mui/material"
import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { differenceInYears } from 'date-fns'
import { formatPhone } from "@/app/utils/mask"
import InputSelect from "@/app/components/InputSelect"
import ButtonDefault from "@/app/components/ButtonDefault"

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBlock: 40,
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
  const [age, setAge] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [hasDonePilates, setHasDonePilates] = useState<string>('')

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setHasDonePilates(event.target.value)
  }

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    // Remove all non-digit characters from the input
    const digitsOnly = value.replace(/\D/g, '');

    // Apply the telephone number mask
    const maskedValue = formatPhone(digitsOnly);

    setPhone(maskedValue);
  }

  const defaultValues = useMemo(() => {
    let obj = {}

    studentFormValues.forEach((v: FormValues) => {
      const value = v.name === 'state' ? 'SC' : ''

      return obj = { ...obj, [v.name]: value }
    })

    return obj
  }, [])

  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
    clearErrors,
    setError,
    reset,
    control,
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues,
  })

  const handleDateOfBirthChange = (birthDate: Date) => {
    if (birthDate) {
      const today = new Date()
      const dateOfBirth = new Date(birthDate)
      const calculatedAge = differenceInYears(today, dateOfBirth)
      console.log('calculatedAge', calculatedAge)
      setAge(calculatedAge.toString())
    } else {
      setAge('');
    }
  };

  const onSubmit:SubmitHandler<FormData> = async (data) => {
    console.log('onSubmit', data)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log("Submitted")
      // reset(defaultValues)
      // setAge('')
      // setPhone('')
      // setHasDonePilates('')
    }
  }, [defaultValues, isSubmitSuccessful, reset])

  return (
    <main className="flex min-h-screen flex-col">
      <TitleContainer>
        <BackButton path="/students" />
        <Title>Cadastro de Alunos</Title>
      </TitleContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container style={{ columnGap: 12 }}>
          {studentFormValues.map((v: FormValues) => {
            let xs = (v.name === 'neighborhood') ? 9 : v.name === 'state' ? 2.5 : 12
            xs = (v.name === 'age') ? 4 : v.name === 'hasDonePilates' ? 7.5 : xs

            if (v.name === 'dateOfBirth') {
              return (
                <Grid key={v.name} item xs={xs}>
                  <Controller
                    name={v.name}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        value={field.value}
                        label={`${v.label} ${v.required ? '*' : ''}`}
                        onChange={(birthDate: Date) => {
                          handleDateOfBirthChange(birthDate)
                          field.onChange(birthDate)
                        }}
                      />
                    )}
                  />
                  <InputWarning
                    marginBottom={0}
                    height={18}
                    message={errors[v.name]?.type === 'required' && v.missingInfoError ? v.missingInfoError : ''}
                  />
                </Grid>
              )
            }

            if (v.name === 'age') {
              return (
                <Grid key={v.name} item xs={xs}>
                  <InputText
                    label={`${v.label} ${v.required ? '*' : ''}`}
                    {...register(v.name, { required: v.required })}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={age}
                  />
                  <InputWarning
                    marginBottom={0}
                    height={18}
                    message={errors[v.name]?.type === 'required' && v.missingInfoError ? v.missingInfoError : ''}
                  />
                </Grid>
              )
            }

            if (v.name === 'phoneNumber') {
              return (
                <Grid key={v.name} item xs={xs}>
                  <InputText
                    label={`${v.label} ${v.required ? '*' : ''}`}
                    {...register(v.name, { required: v.required })}
                    variant="outlined"
                    onChange={handlePhoneChange}
                    value={phone}
                  />
                  <InputWarning
                    marginBottom={0}
                    height={18}
                    message={errors[v.name]?.type === 'required' && v.missingInfoError ? v.missingInfoError : ''}
                  />
                </Grid>
              )
            }

            if (v.type === 'select') {
              return (
                <Grid key={v.name} item xs={xs}>
                  <InputSelect
                    key={v.name}
                    label={v.label}
                    value={hasDonePilates}
                    onChange={handleChangeSelect}
                    options={[
                      {
                        value: '',
                        label: '',
                      },
                      {
                        value: 'no',
                        label: 'Não',
                      },
                      {
                        value: 'yes',
                        label: 'Sim',
                      },
                    ]}
                  />
                </Grid>
              )
            }

            return (
              <Grid key={v.name} item xs={xs}>
                <InputText
                  label={`${v.label} ${v.required ? '*' : ''}`}
                  {...register(v.name, { required: v.required })}
                  variant="outlined"
                  type={v.type}
                  multiline={v.multiline}
                  minRows={v.multiline ? 4 : 1}
                />
                <InputWarning
                  marginBottom={0}
                  height={18}
                  message={errors[v.name]?.type === 'required' && v.missingInfoError ? v.missingInfoError : ''}
                />
              </Grid>
            )
          })}
        </Grid>

        <ButtonDefault onClick={() => clearErrors()} type="submit" variant="contained">
          {isSubmitting ? <CircularProgress /> : 'Salvar'}
        </ButtonDefault>
      </Form>
    </main>
  )
}
