import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '@/lib/axios'
import { Profile } from '@/components/Profile'

interface Profile {
  name: string,
  login: string,
  bio: string,
  company: string,
  followers: number
  avatar_url: string
}

interface Issue {
  id: number
  title: string
  login: string
  body: string
  created_at: string
  comments: number
}

interface FetchContextType {
  issues: Issue[]
  profile: Profile | undefined
  fetchIssues: (query?: string) => Promise<void>
  searchInIssues: (query?: string) => Promise<void>
}

export const FetchContext = createContext({} as FetchContextType)

interface FetchProviderProps {
  children: ReactNode
}

const user = 'brunosduarte'
const repository = 'github-blog'

export function FetchProvider({ children }: FetchProviderProps) {
  const [profile, setProfile] = useState<Profile>()
  const [issues, setIssues] = useState<Issue[]>([])
  const [searchInputIssues, setSearchInputIssues] = useState<Issue[]>([])

  const fetchProfile = useCallback(async () => {
    const profile = await api.get(`/users/${user}`, {})
    setProfile(profile.data)
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    const repos = await api.get(`repos/${user}/${repository}/issues`, {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      },
    })
    setIssues(repos.data)
  }, [])

  const searchInIssues = useCallback(async (query?: string) => {
    const searchIssues = await api.get(`search/issues?q=${query}%20repo:${user}/${repository}`, {
      params: {
        q: query,
      },
    })
    setSearchInputIssues(searchIssues.data)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [])

  useEffect(() => {
    if (!searchInputIssues) {
      console.log('5',searchInIssues)
      searchInIssues()
    } else {
      console.log('6',fetchIssues)
      fetchIssues()
    }
  }, [fetchIssues, searchInIssues])


  return (
    <FetchContext.Provider
      value={{
        profile,
        issues,
        fetchIssues,
        searchInIssues,
      }}
    >
      {children}
    </FetchContext.Provider>
  )
}