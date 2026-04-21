import { createContext, useContext, type ReactNode } from 'react'
import type { IAppRepository } from '../repositories/types'
import { DexieAppRepository } from '../repositories/DexieAppRepository'

const defaultRepo = new DexieAppRepository()
const RepositoryContext = createContext<IAppRepository>(defaultRepo)

interface RepositoryProviderProps {
  children: ReactNode
  repository?: IAppRepository
}

export function RepositoryProvider({ children, repository = defaultRepo }: RepositoryProviderProps) {
  return (
    <RepositoryContext.Provider value={repository}>
      {children}
    </RepositoryContext.Provider>
  )
}

export function useRepository(): IAppRepository {
  return useContext(RepositoryContext)
}
