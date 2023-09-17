import { User } from './user'

export interface Term {
  id: string
  link?: string
  title: string
}

export const APPLY_STATUS = {
  REDAY: 'REDAY',
  PROGRESS: 'PROGRESS',
  COMPLETE: 'COMPLETE',
  REJECT: 'REJECT',
} as const

export interface ApplyValues {
  userId: User['uid']
  terms: Array<Term['id']>
  appliedAt: Date
  cardId: string
  salary: string
  creditScore: string
  payDate: string
  isMaster: boolean
  isHipass: boolean
  isRf: boolean
  status: keyof typeof APPLY_STATUS
  step: number
}

export interface Option {
  label: string
  value: string | number | undefined
}
