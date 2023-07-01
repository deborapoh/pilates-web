'use client'

import { PaletteOptions, SimplePaletteColorOptions, createTheme } from '@mui/material/styles'

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const palette: DefaultPaletteOptions = {
  mode: 'light',
  primary: {
    main: '#3DA8A3',
  },
  secondary: {
    main: '#E2211C',
  },
  error: {
    main: '#ff0000'
  },
  common: {
    white: '#FFFFFF',
    black: '#2E2E2E',
  },
  action: {
    hover: '#225380'
  }
}

export const lightTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-root": {
            backgroundColor: palette.primary?.main,
            textTransform: 'none',
          },
        },
      },
    },
  },
  palette,
})
