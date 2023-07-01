import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ReactNode } from "react"
import Image from "next/image"

import avatar from '../images/login-empty-photo.svg'

const fakeStudents = [
  'Fake Debora de Oliveira',
  'Fake Fulano da Silva',
]

const StudentList = () => {
  return (
    <List>
      {fakeStudents.map((student) => {
        return (
          <ListItem disablePadding key={student}>
            <ListItemButton>
              <ListItemIcon>
                <Image
                  src={avatar.src}
                  alt={`${student} user photo`}
                  height={40}
                  width={40}
                />
              </ListItemIcon>
              <ListItemText primary={student} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default StudentList
