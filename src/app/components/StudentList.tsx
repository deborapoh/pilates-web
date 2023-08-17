import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Delete } from '@mui/icons-material';
import Image from "next/image"

import avatar from '../images/login-empty-photo.svg'
import { useEffect, useState } from "react"
import { getUsers, softDeleteUser } from "../api/users";
import { useRouter } from "next/navigation";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState({});
  const router = useRouter()

  const fetchData = async () => {
    const data = await getUsers()
    setStudents(data);
  }

  const selectStudent = (student: any) => {
    // router.push(`/students/registration/${student.id}`)
    alert('Edição de Aluno a ser implementada')
  }

  const deleteUser = async (student: any) => {
    // try {
    await softDeleteUser(student.id)
    await fetchData()
    // } catch (error) {
    //   if (error instanceof Error) {
    //     setError({
    //       status: "400",
    //       message: error.message
    //     })
    //   }
    // }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <List>
      {students?.map((student: any) => {
        return (
          <ListItem disablePadding key={student.email}>
            <ListItemButton onClick={() => selectStudent(student)}>
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
      {/* {error ? `${error}` : ''} */}
    </List>
  )
}

export default StudentList
