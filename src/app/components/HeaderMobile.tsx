import { Box, IconButton, styled } from "@mui/material"
import Image from "next/image"

import menu from '../images/icons/hamburger.svg'
import notifications from '../images/icons/bell.svg'
import avatar from '../images/icons/login-empty-photo.svg'

const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 104, // 13
}))

const LeftContainer = styled(Box)(() => ({}))

const RightContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const HeaderMobile = () => {
  const handleClick = () => {
    alert('To be implemented')
  }

  return (
    <Container>
      <LeftContainer>
        <IconButton onClick={handleClick}>
          <Image
            src={menu.src}
            alt="Menu Button"
            height={24}
            width={35}
          />
        </IconButton>
      </LeftContainer>
      <RightContainer>
        <IconButton onClick={handleClick}>
          <Image
            src={notifications.src}
            alt="Notifications Button"
            height={40}
            width={40}
          />
        </IconButton>
        <IconButton onClick={handleClick}>
          <Image
            src={avatar.src}
            alt="User Photo"
            height={40}
            width={40}
          />
        </IconButton>
      </RightContainer>
    </Container>
  )
}

export default HeaderMobile
