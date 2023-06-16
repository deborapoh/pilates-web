import { Box, BoxProps, Typography, styled } from "@mui/material"
import { Module } from "../constants"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Container = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  // justifyContent: 'space-between',
  alignItems: 'space-between',
}))

const ModuleName = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 700,
  textAlign: 'center',
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
  // zIndex: itemsZIndex.items,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
  paddingBlock: 8,
}))

interface Props extends BoxProps {
  modules: Module[] | undefined
}

const Modules = ({ modules, ...props }: Props) => {
  const router = useRouter()
  const justifyContent = modules && modules?.length >= 3 ? 'space-between' : 'flex-start'
  const marginRight = modules && modules?.length >= 3 ? 0 : 4

  const handleModuleClick = (module: Module) => {
    // temporary
    if (module.path === '/students' || module.path === '/students/registration') {
      router.push(module.path)
      return
    }

    alert('To be implemented')
  }

  return (
    <Container {...props} sx={{ justifyContent }}>
      {modules?.map((m) => (
        <Module
          onClick={() => handleModuleClick(m)}
          key={m.name}
          sx={{ marginRight }}
        >
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
