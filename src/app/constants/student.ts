export type NameValues =
  'firstName' |
  'lastName' |
  'birthDate' |
  'age' |
  'email' |
  'address' |
  'neighborhood' |
  'state' |
  'phoneNumber' |
  'jobTitle' |
  'pathologies' |
  'physicalActivities' |
  'hasDonePilates' |
  'surgeries' |
  'medications' |
  'feelPainWhere' |
  'howMetUs' |
  'pilatesGoal' |
  'physiotherapeuticDiagnosis'

  export interface FormValues {
    name: NameValues
    label: string
    type: string
    required?: boolean
    disabled?: boolean
    multiline?: boolean
    missingInfoError?: string
  }

export interface FormData {
  firstName: string
  lastName: string
  birthDate: string
  age: number | null
  email: string
  address?: string
  neighborhood?: string
  state?: string
  phoneNumber: string
  jobTitle?: string
  pathologies?: string
  physicalActivities?: string
  hasDonePilates?: string
  surgeries: string
  medications?: string
  feelPainWhere?: string
  howMetUs?: string
  pilatesGoal?: string
  physiotherapeuticDiagnosis?: string
}

export const studentFormValues: FormValues[] = [
  {
    name: 'firstName',
    label: 'Nome',
    type: 'text',
    required: true,
    missingInfoError: 'Preencha o Nome',
  },
  {
    name: 'lastName',
    label: 'Sobrenome',
    type: 'text',
    required: true,
    missingInfoError: 'Preencha o Nome',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    missingInfoError: 'Preencha o Email',
  },
  {
    name: 'phoneNumber',
    label: 'Telefone',
    type: 'tel',
    required: true,
    missingInfoError: 'Preencha o Telefone',
  },
  {
    name: 'birthDate',
    label: 'Data de Nascimento',
    type: 'date',
    required: true,
  },
  {
    name: 'age',
    label: 'Idade',
    type: 'number',
    disabled: true,
  },
  {
    name: 'hasDonePilates',
    label: 'Já fez Pilates?',
    type: 'select',
  },
  {
    name: 'address',
    label: 'Endereço',
    type: 'text',
  },
  {
    name: 'neighborhood',
    label: 'Bairro',
    type: 'text',
  },
  // {
  //   name: 'state',
  //   label: 'UF',
  //   type: 'text',
  // },
  {
    name: 'jobTitle',
    label: 'Profissão',
    type: 'text',
  },
  {
    name: 'pathologies',
    label: 'Patologias/Comorbidades/Onde dói?',
    type: 'text',
    multiline: true,
  },
  {
    name: 'physicalActivities',
    label: 'Pratica atividade física?',
    type: 'text',
    multiline: true,
  },
  {
    name: 'surgeries',
    label: 'Já realizou cirurgia?',
    type: 'text',
    multiline: true,
  },
  {
    name: 'medications',
    label: 'Usa medicação contínua ou controlada?',
    type: 'text',
    multiline: true,
  },
  {
    name: 'feelPainWhere',
    label: 'Dor frequente em alguma parte do corpo?',
    type: 'text',
    multiline: true,
  },
  {
    name: 'howMetUs',
    label: 'Como conheceu nosso espaço?',
    type: 'text',

  },
  {
    name: 'pilatesGoal',
    label: 'Objetivo com o pilates',
    type: 'text',
    multiline: true,
  },
  {
    name: 'physiotherapeuticDiagnosis',
    label: 'Diagnóstico Fisioterapêutico',
    type: 'text',
    multiline: true,
  },
]
