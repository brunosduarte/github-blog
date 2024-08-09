import { InputSearch, SearchContainer, TitleSearch } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <TitleSearch>
        <p>Publicações</p>
        <p color="base-span">9 publicações</p>
      </TitleSearch>
      <InputSearch placeholder="Search content"/>
    </SearchContainer>
  )
}