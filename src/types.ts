export interface MiniApp {
  id: string
  name: string
  description: string
  icon: string
  color: string
  html: string
  schema: string
  createdAt: number
  updatedAt: number
}

export interface AppEntry {
  id: string
  appId: string
  data: string
  createdAt: number
}

export interface AppVersion {
  id: string
  appId: string
  html: string
  createdAt: number
}
