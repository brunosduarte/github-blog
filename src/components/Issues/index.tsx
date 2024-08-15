import { useContextSelector } from "use-context-selector";
import { CardContainer, CardContent, CardElapsed, CardTitle, CardTitleAndElapsed, IssuesContainer } from "./styles";
import { FetchContext } from "../../contexts/FetchContext";
import { formatDistanceToNow } from "date-fns";

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
            <CardElapsed>{formatDistanceToNow(issue.created_at, {
              //locale: pt-BR,
              addSuffix: true,
            })}</CardElapsed>
          </CardTitleAndElapsed>
          <CardContent>{issue.body}</CardContent>
        </CardContainer>
        )
      })}
    </IssuesContainer>
  )
}
