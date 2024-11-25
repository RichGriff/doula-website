export type Service = {
  id: number
  icon: string
  title: string
  description: string
  price: number
  rate: string
  included: string[]
  background: 'LIGHT' | 'DARK',
  accent?: boolean
  accentLocation?: 'TOP' | 'BOTTOM',
}

export type Services = Service[]