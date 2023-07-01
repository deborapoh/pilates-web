'use client'

import Modules from "@/app/components/Modules"
import StudentList from "@/app/components/StudentList"
import { modules } from "@/app/constants"
import BackButton from "@/app/icons/BackButton"

export default function Student() {
  return (
    <main className="flex min-h-screen flex-col">
      <BackButton path="/home" />
      <Modules mt={3} modules={modules[0].options} />
      <StudentList />
    </main>
  )
}
