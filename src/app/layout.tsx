'use client'

import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider, CssBaseline } from '@mui/material'

import { lightTheme } from './theme/theme'

import bubblesTop from './images/background-bubbles-top-left.svg'
import bubblesMiddle from './images/background-bubbles-middle-right.svg'
import bubblesBottom from './images/background-bubbles-bottom-left.svg'
import { itemsZIndex } from './constants'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image
          src={bubblesTop.src}
          alt="description"
          height={1000}
          width={1000}
          style={{
            position: 'absolute',
            zIndex: itemsZIndex.background,
            left: 0,
            top: 0,
            height: 155,
            width: 'auto',
          }}
        />
        <Image
          src={bubblesMiddle.src}
          alt="description"
          height={1000}
          width={1000}
          priority={true}
          style={{
            position: 'absolute',
            zIndex: itemsZIndex.background,
            right: 0,
            top: 265,
            height: 220,
            width: 'auto',
          }}
        />
        <Image
          src={bubblesBottom.src}
          alt="description"
          height={1000}
          width={1000}
          style={{
            position: 'absolute',
            zIndex: itemsZIndex.background,
            left: 20,
            top: 500,
            height: 90,
            width: 'auto',
          }}
        />
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
