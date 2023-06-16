import student from '../images/student.svg'
import employee from '../images/employee.svg'
import finance from '../images/finance.svg'
import calendar from '../images/calendar.svg'
import studentEvolution from '../images/list.svg'
import studentRegistration from '../images/edit.svg'

export const itemsZIndex = {
  background: -1,
  items: 1,
  loginItems: 1,
}

export interface Module {
  name: string
  path: string
  icon: any
  options?: Module[]
}

export const modules: Module[] = [
  {
    name: 'Alunos',
    path: '/students',
    icon: student,
    options: [
      {
        name: 'Cadastrar',
        path: '/students/registration',
        icon: studentRegistration,
      },
      {
        name: 'Ficha de Evolução',
        path: '/students/evolution',
        icon: studentEvolution,
      },
    ],
  },
  {
    name: 'Funcionários',
    path: '/employees',
    icon: employee,
  },
  {
    name: 'Financeiro',
    path: '/finance',
    icon: finance,
  },
  {
    name: 'Agenda',
    path: '/calendar',
    icon: calendar,
  },
]

export const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 40,
  height: 225,
  width: '100%',
  justifyContent: 'space-between',
}
