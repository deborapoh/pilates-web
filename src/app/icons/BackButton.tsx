import Image from "next/image";

import BackIcon from '../images/back.svg'
import { Box, IconButton, styled } from "@mui/material";
import { useRouter } from "next/navigation";

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  borderRadius: 20,
  height: 40,
  width: 40,
}))

const BackButton = ({ path }: { path: string }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(path)
  }

  return (
    <IconButton onClick={handleClick} sx={{ width: 56 }}>
      <Container>
        <Image
          src={BackIcon.src}
          alt="Back Icon"
          height={16}
          width={16}
        />
      </Container>
    </IconButton>
  )


}

export default BackButton
