import { useContextSelector } from "use-context-selector";
import { InputSearch, SearchContainer, TitleSearch } from "./styles";
import { RepositoriesContext } from "../../contexts/FetchContext";

export function Search() {
  const repositories = useContextSelector(RepositoriesContext, (context) => {
    return context.repositories
  })

  const publications = repositories.length
  
  return (
    <SearchContainer>
      <TitleSearch>
        <p>Publicações</p>
        <p color="base-span">{publications} publicações</p>
      </TitleSearch>
      <InputSearch placeholder="Search content"/>
    </SearchContainer>
  )
}
