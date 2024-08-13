import { useContextSelector } from "use-context-selector";
import { CardContainer, CardContent, CardElapsed, CardTitle, CardTitleAndElapsed, RepositoriesContainer } from "./styles";
import { FetchContext } from "../../contexts/FetchContext";

export function Repositories() {
  const repositories = useContextSelector(FetchContext, (context) => {
    return context.repositories
  })
  
  return (
    <RepositoriesContainer>
      {repositories.map((repository) => {
        return (
          <CardContainer key={repository.id}>
          <CardTitleAndElapsed>
            <CardTitle>{repository.title}</CardTitle>
            <CardElapsed>{repository.created_at}</CardElapsed>
          </CardTitleAndElapsed>
          <CardContent>{repository.body}</CardContent>
        </CardContainer>
        )
      })}
    </RepositoriesContainer>
  )
}
