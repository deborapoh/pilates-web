export type NameValues =
  'name' |
  'dateOfBirth' |
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
  name: string
  dateOfBirth: string
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
    name: 'name',
    label: 'Nome',
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
    name: 'dateOfBirth',
    label: 'Data de Nascimento',
    type: 'date',
    required: true,
  },
  {
    name: 'age',
    label: 'Idade',
    type: 'number',
    required: true,
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
  {
    name: 'state',
    label: 'UF',
    type: 'text',
  },
  {
    name: 'jobTitle',
    label: 'Profissão',
    type: 'text',
  },
  {
    name: 'pathologies',
    label: 'Onde dói/Patologias/Comorbidades',
    type: 'text',
    multiline: true,
  },
  {
    name: 'physicalActivities',
    label: 'Atividade física que pratica',
    type: 'text',
    multiline: true,
  },
  {
    name: 'surgeries',
    label: 'Cirurgias',
    type: 'text',
    multiline: true,
  },
  {
    name: 'medications',
    label: 'Medicação contínua/controlada',
    type: 'text',
    multiline: true,
  },
  {
    name: 'feelPainWhere',
    label: 'Dor frequente no corpo?',
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
