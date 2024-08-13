import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'
import { Profile } from '../components/Profile'

interface Profile {
  name: string,
  login: string,
  bio: string,
  company: string,
  followers: number
  avatar_url: string
}

interface Repository {
  id: number
  title: string
  publisher: string
  content: string
  createdAt: string
  comments: string
}

interface FetchContextType {
  repositories: Repository[]
  profile: Profile | undefined
  fetchRepositories: (query?: string) => Promise<void>
}

export const FetchContext = createContext({} as FetchContextType)

interface FetchProviderProps {
  children: ReactNode
}

export function FetchProvider({ children }: FetchProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [profile, setProfile] = useState<Profile>()

  const fetchRepositories = useCallback(async (query?: string) => {
    const profile = await api.get('/users/brunosduarte', {})
    setProfile(profile.data)

    const response = await api.get('repos/brunosduarte/github-blog/issues', {
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
    <FetchContext.Provider
      value={{
        profile,
        repositories,
        fetchRepositories,
      }}
    >
      {children}
    </FetchContext.Provider>
  )
}