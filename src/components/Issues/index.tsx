import { useContextSelector } from "use-context-selector";
import { CardContainer, CardContent, CardElapsed, CardTitle, CardTitleAndElapsed, IssuesContainer } from "./styles";
import { FetchContext } from "../../contexts/FetchContext";

export function Issues() {
  const issues = useContextSelector(FetchContext, (context) => {
    return context.issues
  })
  
  return (
    <IssuesContainer>
      {issues.map((issue) => {
        return (
          <CardContainer key={issue.id}>
          <CardTitleAndElapsed>
            <CardTitle>{issue.title}</CardTitle>
            <CardElapsed>{issue.created_at}</CardElapsed>
          </CardTitleAndElapsed>
          <CardContent>{issue.body}</CardContent>
        </CardContainer>
        )
      })}
    </IssuesContainer>
  )
}
