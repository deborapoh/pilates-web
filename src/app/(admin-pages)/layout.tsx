'use client'

import { Box, styled } from '@mui/material'
import HeaderMobile from '../components/HeaderMobile'
import '../globals.css'

const Container = styled(Box)(() => ({
  paddingInline: 32, // 4
}))

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
      <HeaderMobile />
      {children}
    </Container>
  )
}
