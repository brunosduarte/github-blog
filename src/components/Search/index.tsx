import { InputSearch, SearchContainer, TitleSearch } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <TitleSearch>
        <p>Publicações</p>
        <p>9 publicações</p>
      </TitleSearch>
      <InputSearch />
    </SearchContainer>
  )
}
