import { useContextSelector } from "use-context-selector";
import { CardContainer, CardContent, CardElapsed, CardTitle, CardTitleAndElapsed, IssuesContainer } from "./styles";
import { FetchContext } from "@/contexts/FetchContext";
import { formatDistanceToNow } from "date-fns";

export function Issues() {
  const issues = useContextSelector(FetchContext, (context) => {
    return context.issues
  })

  function handleOpenCard( issue: any ) {
    //TODO comparar e react-router-dom
  }
  
  return (
    <IssuesContainer>
      {issues.map((issue) => {
        return (
          // onClick={handleOpenCard(issue.id)}
          <CardContainer key={issue.id} >
            <CardTitleAndElapsed>
              <CardTitle>{ (issue.title.length <= 35) ? issue.title : issue.title.substring(0,35).concat('...') }</CardTitle>
              <CardElapsed>{formatDistanceToNow(issue.created_at, {
                addSuffix: true,
              })}</CardElapsed>
            </CardTitleAndElapsed>
            <CardContent>{ (issue.body.length <= 180) ? issue.body : issue.body.substring(0,180).concat('...') }</CardContent>
          </CardContainer>
        )
      })}
    </IssuesContainer>
  )
}
