'use client'

import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3DA8A3',
    },
    secondary: {
      main: '#E2211C',
    },
    common: {
      white: '#FFFFFF',
      black: '#2E2E2E',
    },
    action: {
      hover: '#225380'
    }
  },
})
