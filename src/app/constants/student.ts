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
    required: boolean
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
    name: 'dateOfBirth',
    label: 'Data de Nascimento',
    type: 'date',
    required: false,
  },
  {
    name: 'age',
    label: 'Idade',
    type: 'integer',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    required: true,
    missingInfoError: 'Preencha o Email',
  },
  {
    name: 'address',
    label: 'Endereço',
    type: 'text',
    required: false,
  },
  {
    name: 'neighborhood',
    label: 'Bairro',
    type: 'text',
    required: false,
  },
  {
    name: 'state',
    label: 'UF',
    type: 'text',
    required: false,
  },
  {
    name: 'phoneNumber',
    label: 'Telefone',
    type: 'text',
    required: true,
    missingInfoError: 'Preencha o Telefone',
  },
  {
    name: 'jobTitle',
    label: 'Profissão',
    type: 'text',
    required: false,
  },
  {
    name: 'pathologies',
    label: 'Patologias/Comorbidades/Onde dói',
    type: 'text',
    required: false,
  },
  {
    name: 'physicalActivities',
    label: 'Pratica atividade física?',
    type: 'text',
    required: false,
  },
  {
    name: 'hasDonePilates',
    label: 'Já fez Pilates?',
    type: 'checkbox',
    required: false,
  },
  {
    name: 'surgeries',
    label: 'Já realizou cirurgia?',
    type: 'text',
    required: false,
  },
  {
    name: 'medications',
    label: 'Faz uso de medicação contínua ou controlada?',
    type: 'text',
    required: false,
  },
  {
    name: 'feelPainWhere',
    label: 'Tem dor com frequência em alguma parte do corpo?',
    type: 'text',
    required: false,
  },
  {
    name: 'howMetUs',
    label: 'Como conheceu nosso espaço?',
    type: 'text',
    required: false,
  },
  {
    name: 'pilatesGoal',
    label: 'Objetivo com o pilates',
    type: 'text',
    required: false,
  },
  {
    name: 'physiotherapeuticDiagnosis',
    label: 'Diagnóstico Fisioterapêutico',
    type: 'text',
    required: false,
  },
]
