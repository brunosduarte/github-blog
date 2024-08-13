import { useContextSelector } from "use-context-selector";
import { CardContainer, CardContent, CardElapsed, CardTitle, CardTitleAndElapsed, RepositoriesContainer } from "./styles";
import { RepositoriesContext } from "../../contexts/FetchContext";

interface Repository {
  id: number
  title: string
  publisher: string
  content: string
  createdAt: string
  comments: string
}

interface Repositories {
  repositories: Repository[]
}

export function Repositories() {
  const repositories = useContextSelector(RepositoriesContext, (context) => {
    return context.repositories
  })
  
  return (
    <RepositoriesContainer>
      {repositories.map((repository:Repository) => {
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
    </RepositoriesContainer>
  )
}
