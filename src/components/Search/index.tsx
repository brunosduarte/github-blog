import { useContextSelector } from "use-context-selector";
import { InputSearch, NumberOfPublications, Publications, SearchContainer, TitleSearch } from "./styles";
import { FetchContext } from "../../contexts/FetchContext";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const fetchIssues = useContextSelector(
    FetchContext,
    (context) => {
      return context.fetchIssues
    }
  )

  const publications = fetchIssues.length

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }
  
  return (
    <SearchContainer>
      <TitleSearch>
        <Publications>Publications</Publications>
        <NumberOfPublications>{publications} publications</NumberOfPublications>
      </TitleSearch>
      <InputSearch 
        type="text"
        placeholder="Search content"
        {...register('query')}
        onChange={handleSubmit(handleSearchIssues)}
      />
    </SearchContainer>
  )
}

