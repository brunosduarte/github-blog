import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '@/lib/axios'
import { Profile } from '@/components/Profile'

export interface Profile {
  name: string,
  login: string,
  bio: string,
  company: string,
  followers: number
  avatar_url: string
}

export interface Issue {
  id: number
  title: string
  login: string
  body: string
  created_at: string
  comments: number
}

export interface FetchContextType {
  issues: Issue[]
  profile: Profile | undefined
  fetchIssues: (query?: string) => Promise<void>
}

export const FetchContext = createContext({} as FetchContextType)

interface FetchProviderProps {
  children: ReactNode
}

const login = 'brunosduarte'
const repo = 'github-blog'

export function FetchProvider({ children }: FetchProviderProps) {
  const [profile, setProfile] = useState<Profile>()
  const [issues, setIssues] = useState<Issue[]>([])
  
  const fetchProfile = useCallback(async () => {
    const profile = await api.get(`/users/${login}`, {})
    setProfile(profile.data)
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    const repos = await api.get(`repos/${login}/${repo}/issues`, {
    //const repos = await api.get(`search/issues?repo:${login}/${repo}%20${query}`, {
      params: {
        // _sort: 'createdAt',
        // _order: 'desc',
        q: query,
      },
    })
    setIssues(repos.data)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])


  return (
    <FetchContext.Provider
      value={{
        profile,
        issues,
        fetchIssues,
      }}
    >
      {children}
    </FetchContext.Provider>
  )
}