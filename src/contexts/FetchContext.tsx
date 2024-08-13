import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'
import { Profile } from '../components/Profile'

interface Profile {
  name: string,
  username: string,
  description: string,
  worksOn: string,
  followers: number
}

interface Repository {
  id: number
  title: string
  publisher: string
  content: string
  createdAt: string
  comments: string
}

interface RepositoryContextType {
  repositories: Repository[]
  profile: Profile | undefined
  fetchRepositories: (query?: string) => Promise<void>
}

export const RepositoriesContext = createContext({} as RepositoryContextType)

interface FetchProviderProps {
  children: ReactNode
}

export function FetchProvider({ children }: FetchProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [profile, setProfile] = useState<Profile>()

  const fetchRepositories = useCallback(async (query?: string) => {
    const profile = await api.get('user', {})
    setProfile(profile.data)

    const response = await api.get('repositories', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setRepositories(response.data)
  }, [])

  useEffect(() => {
    fetchRepositories()
  }, [fetchRepositories])

  return (
    <RepositoriesContext.Provider
      value={{
        profile,
        repositories,
        fetchRepositories,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  )
}