'use client'

import Modules from "@/app/components/Modules"
import WelcomeUser from "@/app/components/WelcomeUser"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <WelcomeUser />
      <Modules />
    </main>
  )
}
