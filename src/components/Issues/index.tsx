import { useContextSelector } from "use-context-selector";
import { CardContainer, CardContent, CardElapsed, CardTitle, CardTitleAndElapsed, IssuesContainer } from "./styles";
import { FetchContext } from "@/contexts/FetchContext";
import { formatDistanceToNow } from "date-fns";

export function Issues() {
  const issues = useContextSelector(FetchContext, (context) => {
    return context.issues
  })

  function handleOpenCard( issue: any ) {
    if (issue.id === issue) {
      const matchId = issue
      console.log('00',matchId)
      //return matchId
    }
    console.log('01',issue)
  }
  
  return (
    <IssuesContainer>
      {issues.map((issue) => {
        return (
          // onClick={handleOpenCard(issue.id)}
          <CardContainer key={issue.id} >
          <CardTitleAndElapsed>
            <CardTitle>{issue.title}</CardTitle>
            <CardElapsed>{formatDistanceToNow(issue.created_at, {
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
