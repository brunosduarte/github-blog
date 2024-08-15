import { useContextSelector } from "use-context-selector";
import { InputSearch, NumberOfPublications, Publications, SearchContainer, TitleSearch } from "./styles";
import { FetchContext } from "../../contexts/FetchContext";

export function Search() {
  const issues = useContextSelector(FetchContext, (context) => {
    return context.issues
  })

  const publications = issues.length
  
  return (
    <SearchContainer>
      <TitleSearch>
        <Publications>Publications</Publications>
        <NumberOfPublications>{publications} publications</NumberOfPublications>
      </TitleSearch>
      <InputSearch placeholder="Search content"/>
    </SearchContainer>
  )
}
