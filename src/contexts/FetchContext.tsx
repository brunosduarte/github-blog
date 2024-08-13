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
  login: string
  body: string
  created_at: string
  comments: number
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

const username = 'brunosduarte'
const repository = 'github-blog'

export function FetchProvider({ children }: FetchProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [profile, setProfile] = useState<Profile>()

  const fetchRepositories = useCallback(async (query?: string) => {
    const profile = await api.get(`/users/${username}`, {})
    setProfile(profile.data)

    const repos = await api.get(`repos/${username}/${repository}/issues`, {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setRepositories(repos.data)
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