import { useCallback, useEffect, useState } from "react";
import { CardContainer, CardContent, CardElapsed, CardTitle, CardTitleAndElapsed, ReposContainer } from "./styles";
import { api } from "../../lib/axios";

interface Repository {
  id: number
  title: string
  publisher: string
  content: string
  createdAt: string
  comments: string
}

export function Repos() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  const fetchRepositories = useCallback(async () => {
    const response = await api.get('repositories', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
      },
    })
    console.log(response.data)
    setRepositories(response.data)
  }, [])

  useEffect(() => {
    fetchRepositories()
  }, [fetchRepositories])
  
  return (
    <ReposContainer>

      {repositories.map((repository) => {
        return (
          <CardContainer key={repository.id}>
          <CardTitleAndElapsed>
            <CardTitle>{repository.title}</CardTitle>
            <CardElapsed>{repository.createdAt}</CardElapsed>
          </CardTitleAndElapsed>
          <CardContent>{repository.content}</CardContent>
        </CardContainer>
        )
      })}

    </ReposContainer>
  )
}
