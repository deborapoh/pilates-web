import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Delete } from '@mui/icons-material';
import Image from "next/image"

import avatar from '../images/login-empty-photo.svg'
import { useEffect, useState } from "react"
import { getUsers, softDeleteUser } from "../api/users";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchData = async () => {
    const data = await getUsers()
    setStudents(data);
  }

  const deleteUser = async (student: any) => {
    console.log("delete", student.id);
    await softDeleteUser(student.id)
    await fetchData()
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <List>
      {students?.map((student: any) => {
        return (
          <ListItem disablePadding key={student.email}>
            <ListItemButton>
              <ListItemIcon>
                <Image
                  src={avatar.src}
                  alt={`${student.firstName} user photo`}
                  height={40}
                  width={40}
                />
              </ListItemIcon>
              <ListItemText primary={`${student.firstName} ${student.lastName}`} />
            </ListItemButton>
            <ListItemButton onClick={() => deleteUser(student)}>
              <ListItemIcon>
                <Delete />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default StudentList
