import student from './images/icons/student.svg'
import employee from './images/icons/employee.svg'
import finance from './images/icons/finance.svg'
import calendar from './images/icons/calendar.svg'

export const itemsZIndex = {
  background: 0,
  items: 1,
  loginItems: 1,
}

export const modules: { name: string; icon: any }[] = [
  {
    name: 'Students',
    icon: student,
  },
  {
    name: 'Employees',
    icon: employee,
  },
  {
    name: 'Finance',
    icon: finance,
  },
  {
    name: 'Calendar',
    icon: calendar,
  },
]
