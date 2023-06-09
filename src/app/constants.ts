import student from './images/icons/student.svg'
import employee from './images/icons/employee.svg'
import finance from './images/icons/finance.svg'
import calendar from './images/icons/calendar.svg'

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
        icon: student,
      },
      {
        name: 'Ficha de Evolução',
        path: '/students/evolution',
        icon: student,
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
