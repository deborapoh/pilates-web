import { Box, Typography, styled } from "@mui/material"
import { itemsZIndex, modules } from "../constants"
import Image from "next/image"

const Container = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'space-between',
}))

const ModuleName = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 700,
  color: theme.palette.primary.main,
}))

const Module = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  height: 88, // 11
  width: 88, // 11
  marginBottom: 32,
  backgroundColor: theme.palette.common.white,
  borderRadius: 16, // 2
  zIndex: itemsZIndex.items,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
}))

const Modules = () => {
  return (
    <Container>
      {modules?.map((m) => (
        <Module key={m.name}>
          <Image
            src={m.icon.src}
            alt={`Module ${m.name}`}
            height={30}
            width={100}
            style={{
              width: 'auto',
            }}
          />
          <ModuleName>{m.name}</ModuleName>
        </Module>
      ))}
    </Container>
  )
}

export default Modules
