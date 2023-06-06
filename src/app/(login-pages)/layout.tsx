import Image from 'next/image'
import '../globals.css'

import backgroundMeditating from '../images/background-meditating.svg'
import { itemsZIndex } from '@/app/constants'

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Image
        src={backgroundMeditating.src}
        alt="background meditating person"
        height={1000}
        width={1000}
        style={{
          position: 'absolute',
          zIndex: itemsZIndex.background,
          bottom: 0,
          right: 0,
          left: 0,
          margin: 'auto',
          height: 265,
          width: 'auto',
        }}
      />
      {children}
    </>
  )
}
